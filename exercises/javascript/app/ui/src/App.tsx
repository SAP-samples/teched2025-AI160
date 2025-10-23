import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface PurchaseOrder {
  PurchaseOrder: string
  PurchaseOrderItem: string
  Plant: string
  OrderQuantity: number
  PurchaseOrderQuantityUnit: string
  DeliveryAddressName: string
  DeliveryAddressCityName: string
  DeliveryAddressCountry: string
  ScheduleLineDeliveryDate: number
  OverdueTime: number
  ExistingNote?: string
  DraftEmail?: string
}

interface AgentResponse {
  success: boolean
  plantFilter: string
  purchaseOrders: PurchaseOrder[]
  timestamp: string
}

function App() {
  const [threadId, setThreadId] = useState<string | null>(null);
  const [userInput, setUserInput] = useState('')
  const [response, setResponse] = useState<AgentResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [fadingOut, setFadingOut] = useState(false)
  const [processingSteps] = useState([
    'Analyzing user input',
    'Filtering purchase orders',
    'Summarizing the final result'
  ])
  
  // Email popup state
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<PurchaseOrder | null>(null)
  const [editableEmail, setEditableEmail] = useState('')
  
  // Success popup state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [successTimestamp, setSuccessTimestamp] = useState('')
  
  // Track sent emails and their content
  const [sentEmails, setSentEmails] = useState<Set<string>>(new Set())
  const [sentEmailContent, setSentEmailContent] = useState<Map<string, string>>(new Map())
  
  // Email submission loading state
  const [emailSubmitting, setEmailSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInput.trim()) return

    const newThreadId = uuidv4();
    setThreadId(newThreadId);
    console.log('threadId in ui:', newThreadId);
    setLoading(true)
    setError(null)
    setResponse(null)
    setCurrentStep(0)
    setFadingOut(false)

    try {
      const prompt = userInput.trim();
      const apiPromise = fetch(`/api/agent/trigger-agent?prompt=${encodeURIComponent(prompt)}`, {
        headers: {
          'x-thread-id': newThreadId
        }
      })
      
      const getRandomDuration = () => Math.floor(Math.random() * 1000) + 2500

      setCurrentStep(0)
      await new Promise(resolve => setTimeout(resolve, getRandomDuration()))

      setCurrentStep(1)
      await new Promise(resolve => setTimeout(resolve, getRandomDuration()))

      setCurrentStep(2)
      
      const res = await apiPromise

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error.message)
      }
      
      await new Promise(resolve => setTimeout(resolve, getRandomDuration()))
      
      setFadingOut(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setResponse(data)
    } catch (err: any) {
      setError(err.message ?? 'An unknown error occurred.')
    } finally {
      setLoading(false)
      setCurrentStep(0)
      setFadingOut(false)
    }
  }

  const formatDate = (dateString: string | number) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // Email popup handlers
  const handleOpenEmailPopup = (order: PurchaseOrder) => {
    setSelectedOrder(order)
    setEditableEmail(order.DraftEmail || '')
    setShowEmailPopup(true)
  }

  const handleCloseEmailPopup = () => {
    setShowEmailPopup(false)
    setSelectedOrder(null)
    setEditableEmail('')
  }

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false)
  }

  const handleSubmitEmail = async () => {
    if (!selectedOrder) return
    
    setEmailSubmitting(true)
    
    try {
      console.log('threadId in ui:', threadId);
      const response = await fetch('/api/agent/create-po-item-notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-thread-id': threadId!
        },
        body: JSON.stringify({
          purchaseOrder: selectedOrder.PurchaseOrder,
          purchaseOrderItem: selectedOrder.PurchaseOrderItem,
          noteText: editableEmail
        })
      })

      if (response.ok) {
        const data = await response.json()
        
        // Only show success popup if the createNote functionality actually returned a result
        // When createNote is commented out/disabled, data.result will be undefined
        if (data.success && data.result !== undefined) {
          // Create unique key for this order to track sent emails
          const orderKey = `${selectedOrder.PurchaseOrder}-${selectedOrder.PurchaseOrderItem}`
          
          // Add to sent emails set and store the content
          setSentEmails(prev => new Set(prev).add(orderKey))
          setSentEmailContent(prev => new Map(prev).set(orderKey, editableEmail))
          
          // Set success popup data
          setSuccessTimestamp(data.timestamp || new Date().toISOString())
          setShowSuccessPopup(true)
          
          // Close email popup
          handleCloseEmailPopup()
          
          // Auto-hide success popup after 20 seconds
          setTimeout(() => {
            setShowSuccessPopup(false)
          }, 20000)
        } else {
          console.log('Note creation functionality is not enabled yet')
          // Just close the popup without showing success
          handleCloseEmailPopup()
        }
      } else {
        throw new Error('Failed to submit email')
      }
    } catch (err) {
      console.error('Error submitting email:', err)
      // Could set an error state here
    } finally {
      setEmailSubmitting(false)
    }
  }

  return (
    <>
      {/* SAP Fiori Shell Header */}
      <div className="fiori-shell-header">
        <div className="logo">
          <img 
            className="sap-logo" 
            src="https://www.sap.com/aemedge/icons/sap-logo.svg" 
            alt="SAP Logo" 
            width="48" 
            height="24"
          />
        </div>
        <div className="app-title">Purchase Order Management</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Combined Title and Search Section */}
        <div className="title-search-container">
          <div className="page-title">Overdue Purchase Order Agent</div>
          
          {/* Search Section */}
          <div className="search-section">
            <form onSubmit={handleSubmit}>
              <div className="search-row">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Search"
                  disabled={loading}
                  className="search-input"
                />
                <button type="submit" disabled={loading || !userInput.trim()} className="search-button">
                  {loading ? 'Processing...' : 'Go'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Content with padding */}
        <div className="content-with-padding">
          {/* Message Strips */}
          {error && (
            <div className="message-strip error">
              Error: {error}
            </div>
          )}

          {/* Table Section */}
          <div className="table-section">
            <div className="table-header">
              <div className="table-title">Purchase Orders ({response ? response.purchaseOrders.length : 0})</div>
            </div>
            
            {/* Processing Steps Animation inside table */}
            {loading ? (
              <div className={`processing-steps ${fadingOut ? 'fading-out' : ''}`}>
                {processingSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`processing-step ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                  >
                    <div className="step-indicator">
                      {index < currentStep ? (
                        <span className="step-check">✓</span>
                      ) : index === currentStep ? (
                        <div className="step-spinner"></div>
                      ) : (
                        <span className="step-number">{index + 1}</span>
                      )}
                    </div>
                    <div className="step-text">{step}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="table-responsive">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Purchase Order</th>
                      <th>Item</th>
                      <th>Plant</th>
                      <th>Quantity</th>
                      <th>Delivery Address</th>
                      <th>Schedule Line Delivery Date</th>
                      <th>Overdue Status</th>
                      <th>Escalation Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {response && response.purchaseOrders.length > 0 ? (
                      response.purchaseOrders.map((order, index) => (
                        <tr key={`${order.PurchaseOrder}-${order.PurchaseOrderItem}-${index}`}>
                          <td><strong>{order.PurchaseOrder}</strong></td>
                          <td>{order.PurchaseOrderItem}</td>
                          <td>{order.Plant}</td>
                          <td>{order.OrderQuantity} {order.PurchaseOrderQuantityUnit}</td>
                          <td>{order.DeliveryAddressName}, {order.DeliveryAddressCityName}, {order.DeliveryAddressCountry}</td>
                          <td>{formatDate(order.ScheduleLineDeliveryDate)}</td>
                          <td>
                            <span className={`status-badge ${order.OverdueTime < 0 ? 'overdue' : 'on-time'}`}>
                              {order.OverdueTime < 0 ? `${Math.abs(Math.round(order.OverdueTime / 1000 / 60 / 60 / 24))} days` : `${Math.round(order.OverdueTime / 1000 / 60 / 60 / 24)} days remaining`}
                            </span>
                          </td>
                          <td>
                            {order.OverdueTime < 0 && (order.ExistingNote || order.DraftEmail) && (() => {
                              const orderKey = `${order.PurchaseOrder}-${order.PurchaseOrderItem}`;
                              const hasSentEmail = sentEmails.has(orderKey);
                              const isViewOnly = order.ExistingNote || hasSentEmail;
                              
                              return (
                                <button 
                                  className="sap-button-standard"
                                  onClick={() => handleOpenEmailPopup(order)}
                                  title={
                                    order.ExistingNote 
                                      ? "View existing note (read-only)" 
                                      : hasSentEmail
                                        ? "View sent email (read-only)"
                                        : "Create and send escalation email"
                                  }
                                  style={isViewOnly ? {
                                    borderStyle: 'dashed' as const,
                                    borderColor: '#999',
                                    backgroundColor: '#f8f8f8'
                                  } : undefined}
                                >
                                  <img 
                                    src="/static/299250_email_blue.png" 
                                    alt={isViewOnly ? "View" : "Email"} 
                                    width="16" 
                                    height="16"
                                    style={isViewOnly ? { 
                                      filter: 'grayscale(100%) brightness(0.6)',
                                      opacity: 0.7 
                                    } : undefined}
                                  />
                                </button>
                              );
                            })()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="empty-message">
                          {response && response.purchaseOrders.length === 0 ? 'No purchase orders found matching your search criteria.' : 'No data available'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Email/Note Popup Modal */}
      {showEmailPopup && selectedOrder && (() => {
        const orderKey = `${selectedOrder.PurchaseOrder}-${selectedOrder.PurchaseOrderItem}`;
        const hasSentEmail = sentEmails.has(orderKey);
        const sentContent = sentEmailContent.get(orderKey);
        const isReadOnly = selectedOrder.ExistingNote || hasSentEmail;
        
        return (
          <div className="modal-overlay" onClick={handleCloseEmailPopup}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>
                  {selectedOrder.ExistingNote 
                    ? `Existing Note - PO ${selectedOrder.PurchaseOrder} Item ${selectedOrder.PurchaseOrderItem}`
                    : hasSentEmail
                      ? `Sent Email - PO ${selectedOrder.PurchaseOrder} Item ${selectedOrder.PurchaseOrderItem}`
                      : `Draft Escalation Email - PO ${selectedOrder.PurchaseOrder} Item ${selectedOrder.PurchaseOrderItem}`
                  }
                </h2>
              </div>
              
              <div className="modal-body">
                <div className="email-editor">
                  <label htmlFor="email-content">
                    {selectedOrder.ExistingNote 
                      ? 'Note Content:' 
                      : hasSentEmail 
                        ? 'Sent Email Content:'
                        : 'Email Content:'
                    }
                  </label>
                  <textarea
                    id="email-content"
                    value={selectedOrder.ExistingNote || sentContent || editableEmail}
                    onChange={!isReadOnly ? (e) => setEditableEmail(e.target.value) : undefined}
                    rows={15}
                    className="email-textarea"
                    placeholder={isReadOnly ? '' : 'Enter email content...'}
                    readOnly={isReadOnly}
                    style={isReadOnly ? { backgroundColor: '#f5f5f5', cursor: 'default' } : {}}
                  />
                </div>
              </div>
              
              <div className="modal-footer">
                  <button 
                    className="sap-button-standard" 
                    onClick={handleCloseEmailPopup}
                    disabled={(!isReadOnly && emailSubmitting) || false}
                  >
                  <img src="/static/298947_sys-cancel_blue.png" alt="Close" width="16" height="16" />
                  {isReadOnly ? 'Close' : 'Cancel'}
                </button>
                {!isReadOnly && (
                  <button 
                    className="sap-button-emphasized" 
                    onClick={handleSubmitEmail}
                    disabled={emailSubmitting}
                  >
                    <img src="/static/299103_message-success_white.png" alt="Send" width="16" height="16" />
                    {emailSubmitting ? 'Sending...' : 'Send'}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <div className="success-popup-content">
            <div className="success-popup-header">
              <div className="success-popup-icon">
                <img src="/static/299103_message-success_white.png" alt="Success" width="16" height="16" />
              </div>
              <div className="success-popup-message">
                Email sent at {formatDate(successTimestamp)}
              </div>
              <button className="success-popup-close" onClick={handleCloseSuccessPopup}>
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
