export const data = {
  "d": {
    "results": [
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000001',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000001',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000001",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "ATT_QM7_DE_01",
        "Plant": "DE01",
        "OrderQuantity": "28",
        "PurchaseOrderQuantityUnit": "PC",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "206.53",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Production Center",
        "DeliveryAddressCityName": "Munich",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000001',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000001',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000001',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000001",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1757216514641)/",
              "PurchaseOrderQuantityUnit": "PC",
              "ScheduleLineOrderQuantity": "28"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000001',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000001',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000001",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-PROD1",
        "Plant": "M201",
        "OrderQuantity": "71",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "188.81",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Distribution Center",
        "DeliveryAddressCityName": "Berlin",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000001',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000001',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000001',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemNoteType"
              },
              "PurchaseOrder": "4500000001",
              "PurchaseOrderItem": "20",
              "TextObjectType": "F03",
              "Language": "EN",
              "PlainLongText": "Subject: Escalation: Overdue Purchase Order 4500000001 - Item 20\n\nDear Administrator,\n\nThe following purchase order item 20 is overdue for delivery. Please address this issue promptly."
            }
          ]
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000001',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000001',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000001",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1757140083056)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "71"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000002',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000002',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000002",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "ATT_QM7_DE_01",
        "Plant": "M201",
        "OrderQuantity": "90",
        "PurchaseOrderQuantityUnit": "PC",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "86.66",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Logistics Center",
        "DeliveryAddressCityName": "Stuttgart",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000002',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000002',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000002',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000002",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1756826720684)/",
              "PurchaseOrderQuantityUnit": "PC",
              "ScheduleLineOrderQuantity": "90"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000002',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000002',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000002",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-RAW-001",
        "Plant": "DE01",
        "OrderQuantity": "86",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "395.01",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Storage Facility",
        "DeliveryAddressCityName": "Cologne",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000002',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000002',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000002',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000002",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1756778507537)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "86"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000003',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000003',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000003",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "MM-PROD1",
        "Plant": "M204",
        "OrderQuantity": "74",
        "PurchaseOrderQuantityUnit": "KG",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "334.34",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Manufacturing Plant",
        "DeliveryAddressCityName": "Frankfurt am Main",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000003',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000003',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000003',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000003",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1757298666026)/",
              "PurchaseOrderQuantityUnit": "KG",
              "ScheduleLineOrderQuantity": "74"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000003',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000003',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000003",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-RAW-002",
        "Plant": "M201",
        "OrderQuantity": "72",
        "PurchaseOrderQuantityUnit": "KG",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "197.03",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Distribution Center",
        "DeliveryAddressCityName": "Berlin",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000003',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000003',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000003',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemNoteType"
              },
              "PurchaseOrder": "4500000003",
              "PurchaseOrderItem": "20",
              "TextObjectType": "F03",
              "Language": "EN",
              "PlainLongText": "Subject: Escalation: Overdue Purchase Order 4500000003 - Item 20\n\nDear Administrator,\n\nThe following purchase order item 20 is overdue for delivery. Please address this issue promptly."
            }
          ]
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000003',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000003',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000003",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1756819551750)/",
              "PurchaseOrderQuantityUnit": "KG",
              "ScheduleLineOrderQuantity": "72"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000004',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000004',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000004",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "MM-PROD2",
        "Plant": "PT01",
        "OrderQuantity": "3",
        "PurchaseOrderQuantityUnit": "KG",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "265.42",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Warehouse Hamburg",
        "DeliveryAddressCityName": "Hamburg",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000004',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000004',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000004',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000004",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1757201867343)/",
              "PurchaseOrderQuantityUnit": "KG",
              "ScheduleLineOrderQuantity": "3"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000004',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000004',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000004",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "ATT_QM8_DE_02",
        "Plant": "PT01",
        "OrderQuantity": "10",
        "PurchaseOrderQuantityUnit": "KG",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "209.20",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Storage Facility",
        "DeliveryAddressCityName": "Cologne",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000004',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000004',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000004',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemNoteType"
              },
              "PurchaseOrder": "4500000004",
              "PurchaseOrderItem": "20",
              "TextObjectType": "F03",
              "Language": "EN",
              "PlainLongText": "Subject: Escalation: Overdue Purchase Order 4500000004 - Item 20\n\nDear Administrator,\n\nThe following purchase order item 20 is overdue for delivery. Please address this issue promptly."
            }
          ]
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000004',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000004',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000004",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1757362942483)/",
              "PurchaseOrderQuantityUnit": "KG",
              "ScheduleLineOrderQuantity": "10"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000005',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000005',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000005",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "ATT_QM7_DE_01",
        "Plant": "PT01",
        "OrderQuantity": "89",
        "PurchaseOrderQuantityUnit": "L",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "35.20",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Logistics Center",
        "DeliveryAddressCityName": "Stuttgart",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000005',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000005',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000005',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000005",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1756996340845)/",
              "PurchaseOrderQuantityUnit": "L",
              "ScheduleLineOrderQuantity": "89"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000005',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000005',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000005",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-PROD3",
        "Plant": "M204",
        "OrderQuantity": "88",
        "PurchaseOrderQuantityUnit": "EA",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "147.75",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Distribution Center",
        "DeliveryAddressCityName": "Berlin",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000005',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000005',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000005',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000005",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1756814085764)/",
              "PurchaseOrderQuantityUnit": "EA",
              "ScheduleLineOrderQuantity": "88"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000006',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000006',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000006",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "ATT_QM7_DE_01",
        "Plant": "PT01",
        "OrderQuantity": "79",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "231.67",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Manufacturing Plant",
        "DeliveryAddressCityName": "Frankfurt am Main",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000006',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000006',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000006',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000006",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1756975565589)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "79"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000006',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000006',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000006",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "SC01-FERT-01",
        "Plant": "M101",
        "OrderQuantity": "28",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "219.05",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Manufacturing Plant",
        "DeliveryAddressCityName": "Frankfurt am Main",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000006',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000006',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000006',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000006",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1757329372709)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "28"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000007',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000007',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000007",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "SC01-FERT-01",
        "Plant": "PT01",
        "OrderQuantity": "41",
        "PurchaseOrderQuantityUnit": "L",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "485.56",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Distribution Center",
        "DeliveryAddressCityName": "Berlin",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000007',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000007',PurchaseOrderItem='10',TextObjectType='F03',Language='EN')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000007',PurchaseOrderItem='10',TextObjectType='F03',Language='EN')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemNoteType"
              },
              "PurchaseOrder": "4500000007",
              "PurchaseOrderItem": "10",
              "TextObjectType": "F03",
              "Language": "EN",
              "PlainLongText": "Subject: Escalation: Overdue Purchase Order 4500000007 - Item 10\n\nDear Administrator,\n\nThe following purchase order item 10 is overdue for delivery. Please address this issue promptly."
            }
          ]
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000007',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000007',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000007",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1756997090715)/",
              "PurchaseOrderQuantityUnit": "L",
              "ScheduleLineOrderQuantity": "41"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000007',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000007',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000007",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-RAW-001",
        "Plant": "M101",
        "OrderQuantity": "82",
        "PurchaseOrderQuantityUnit": "PC",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "387.68",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Warehouse Hamburg",
        "DeliveryAddressCityName": "Hamburg",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000007',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000007',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000007',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemNoteType"
              },
              "PurchaseOrder": "4500000007",
              "PurchaseOrderItem": "20",
              "TextObjectType": "F03",
              "Language": "EN",
              "PlainLongText": "Subject: Escalation: Overdue Purchase Order 4500000007 - Item 20\n\nDear Administrator,\n\nThe following purchase order item 20 is overdue for delivery. Please address this issue promptly."
            }
          ]
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000007',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000007',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000007",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1756991077583)/",
              "PurchaseOrderQuantityUnit": "PC",
              "ScheduleLineOrderQuantity": "82"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000008',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000008',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000008",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "SC01-ROH-01",
        "Plant": "M101",
        "OrderQuantity": "15",
        "PurchaseOrderQuantityUnit": "EA",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "44.59",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Production Center",
        "DeliveryAddressCityName": "Munich",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000008',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000008',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000008',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000008",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1756911023316)/",
              "PurchaseOrderQuantityUnit": "EA",
              "ScheduleLineOrderQuantity": "15"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000008',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000008',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000008",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-PROD3",
        "Plant": "M201",
        "OrderQuantity": "14",
        "PurchaseOrderQuantityUnit": "PC",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "207.63",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Production Center",
        "DeliveryAddressCityName": "Munich",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000008',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000008',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000008',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000008",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1756750033299)/",
              "PurchaseOrderQuantityUnit": "PC",
              "ScheduleLineOrderQuantity": "14"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000009',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000009',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000009",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "SC01-FERT-01",
        "Plant": "PT01",
        "OrderQuantity": "76",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "169.08",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Production Center",
        "DeliveryAddressCityName": "Munich",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000009',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000009',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000009',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000009",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1757036175531)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "76"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000009',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000009',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000009",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "SC01-COMP-01",
        "Plant": "M204",
        "OrderQuantity": "19",
        "PurchaseOrderQuantityUnit": "EA",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "473.39",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Logistics Center",
        "DeliveryAddressCityName": "Stuttgart",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000009',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000009',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000009',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000009",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1757164669306)/",
              "PurchaseOrderQuantityUnit": "EA",
              "ScheduleLineOrderQuantity": "19"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000010',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000010',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000010",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "MM-RAW-002",
        "Plant": "M201",
        "OrderQuantity": "72",
        "PurchaseOrderQuantityUnit": "EA",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "56.06",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Production Center",
        "DeliveryAddressCityName": "Munich",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000010',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000010',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000010',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000010",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1757097753618)/",
              "PurchaseOrderQuantityUnit": "EA",
              "ScheduleLineOrderQuantity": "72"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000010',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000010',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000010",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-RAW-001",
        "Plant": "DE01",
        "OrderQuantity": "98",
        "PurchaseOrderQuantityUnit": "L",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "277.43",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Logistics Center",
        "DeliveryAddressCityName": "Stuttgart",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000010',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000010',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='4500000010',PurchaseOrderItem='20',TextObjectType='F03',Language='EN')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemNoteType"
              },
              "PurchaseOrder": "4500000010",
              "PurchaseOrderItem": "20",
              "TextObjectType": "F03",
              "Language": "EN",
              "PlainLongText": "Subject: Escalation: Overdue Purchase Order 4500000010 - Item 20\n\nDear Administrator,\n\nThe following purchase order item 20 is overdue for delivery. Please address this issue promptly."
            }
          ]
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000010',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000010',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000010",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1756878187274)/",
              "PurchaseOrderQuantityUnit": "L",
              "ScheduleLineOrderQuantity": "98"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000011',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000011',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000011",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "SC01-ROH-11",
        "Plant": "M204",
        "OrderQuantity": "29",
        "PurchaseOrderQuantityUnit": "EA",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "335.22",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Warehouse Hamburg",
        "DeliveryAddressCityName": "Hamburg",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000011',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000011',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000011',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000011",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1766873277659)/",
              "PurchaseOrderQuantityUnit": "EA",
              "ScheduleLineOrderQuantity": "29"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000011',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000011',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000011",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "SC01-ROH-11",
        "Plant": "M204",
        "OrderQuantity": "49",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "167.70",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Warehouse Hamburg",
        "DeliveryAddressCityName": "Hamburg",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000011',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000011',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000011',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000011",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1764468482754)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "49"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000012',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000012',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000012",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "MM_HAWA_00000_N",
        "Plant": "PT01",
        "OrderQuantity": "58",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "108.99",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Distribution Center",
        "DeliveryAddressCityName": "Berlin",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000012',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000012',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000012',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000012",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1762191367752)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "58"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000012',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000012',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000012",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "ATT_QM8_DE_02",
        "Plant": "M201",
        "OrderQuantity": "73",
        "PurchaseOrderQuantityUnit": "EA",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "471.79",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Logistics Center",
        "DeliveryAddressCityName": "Stuttgart",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000012',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000012',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000012',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000012",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1764220837904)/",
              "PurchaseOrderQuantityUnit": "EA",
              "ScheduleLineOrderQuantity": "73"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000013',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000013',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000013",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "MM-PROD2",
        "Plant": "M201",
        "OrderQuantity": "52",
        "PurchaseOrderQuantityUnit": "PC",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "188.62",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Manufacturing Plant",
        "DeliveryAddressCityName": "Frankfurt am Main",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000013',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000013',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000013',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000013",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1765638044541)/",
              "PurchaseOrderQuantityUnit": "PC",
              "ScheduleLineOrderQuantity": "52"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000013',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000013',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000013",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "SC01-COMP-01",
        "Plant": "M204",
        "OrderQuantity": "28",
        "PurchaseOrderQuantityUnit": "KG",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "129.17",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Manufacturing Plant",
        "DeliveryAddressCityName": "Frankfurt am Main",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000013',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000013',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000013',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000013",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1766591950791)/",
              "PurchaseOrderQuantityUnit": "KG",
              "ScheduleLineOrderQuantity": "28"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000014',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000014',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000014",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "MM-RAW-001",
        "Plant": "M101",
        "OrderQuantity": "61",
        "PurchaseOrderQuantityUnit": "KG",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "159.99",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Production Center",
        "DeliveryAddressCityName": "Munich",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000014',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000014',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000014',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000014",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1765826655408)/",
              "PurchaseOrderQuantityUnit": "KG",
              "ScheduleLineOrderQuantity": "61"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000014',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000014',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000014",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-PROD3",
        "Plant": "M201",
        "OrderQuantity": "98",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "490.66",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Storage Facility",
        "DeliveryAddressCityName": "Cologne",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000014',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000014',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000014',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000014",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1763827312680)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "98"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000015',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000015',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000015",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "SC01-ROH-11",
        "Plant": "PT01",
        "OrderQuantity": "53",
        "PurchaseOrderQuantityUnit": "PC",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "164.07",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Storage Facility",
        "DeliveryAddressCityName": "Cologne",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000015',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000015',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000015',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000015",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1767112066797)/",
              "PurchaseOrderQuantityUnit": "PC",
              "ScheduleLineOrderQuantity": "53"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000015',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000015',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000015",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "SC01-ROH-11",
        "Plant": "DE01",
        "OrderQuantity": "77",
        "PurchaseOrderQuantityUnit": "L",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "205.96",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Manufacturing Plant",
        "DeliveryAddressCityName": "Frankfurt am Main",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000015',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000015',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000015',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000015",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1762040355440)/",
              "PurchaseOrderQuantityUnit": "L",
              "ScheduleLineOrderQuantity": "77"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000016',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000016',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000016",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "ATT_QM9_US_01",
        "Plant": "PT01",
        "OrderQuantity": "90",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "17.59",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Production Center",
        "DeliveryAddressCityName": "Munich",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000016',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000016',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000016',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000016",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1765974011554)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "90"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000016',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000016',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000016",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "SC01-HALB-01",
        "Plant": "M101",
        "OrderQuantity": "23",
        "PurchaseOrderQuantityUnit": "L",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "333.57",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Manufacturing Plant",
        "DeliveryAddressCityName": "Frankfurt am Main",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000016',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000016',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000016',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000016",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1762587573172)/",
              "PurchaseOrderQuantityUnit": "L",
              "ScheduleLineOrderQuantity": "23"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000017',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000017',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000017",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "ATT_QM7_DE_01",
        "Plant": "M204",
        "OrderQuantity": "28",
        "PurchaseOrderQuantityUnit": "EA",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "370.87",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Production Center",
        "DeliveryAddressCityName": "Munich",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000017',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000017',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000017',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000017",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1762939320077)/",
              "PurchaseOrderQuantityUnit": "EA",
              "ScheduleLineOrderQuantity": "28"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000017',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000017',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000017",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "ATT_QM9_US_01",
        "Plant": "DE01",
        "OrderQuantity": "68",
        "PurchaseOrderQuantityUnit": "L",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "324.09",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Logistics Center",
        "DeliveryAddressCityName": "Stuttgart",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000017',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000017',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000017',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000017",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1765367439463)/",
              "PurchaseOrderQuantityUnit": "L",
              "ScheduleLineOrderQuantity": "68"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000018',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000018',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000018",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "MM-PROD3",
        "Plant": "M204",
        "OrderQuantity": "2",
        "PurchaseOrderQuantityUnit": "EA",
        "DocumentCurrency": "JPY",
        "NetPriceAmount": "149.66",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Logistics Center",
        "DeliveryAddressCityName": "Stuttgart",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000018',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000018',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000018',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000018",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1766807154658)/",
              "PurchaseOrderQuantityUnit": "EA",
              "ScheduleLineOrderQuantity": "2"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000018',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000018',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000018",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "ATT_QM7_DE_01",
        "Plant": "PT01",
        "OrderQuantity": "47",
        "PurchaseOrderQuantityUnit": "PC",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "11.36",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Storage Facility",
        "DeliveryAddressCityName": "Cologne",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000018',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000018',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000018',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000018",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1765101201084)/",
              "PurchaseOrderQuantityUnit": "PC",
              "ScheduleLineOrderQuantity": "47"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000019',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000019',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000019",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "ATT_QM9_US_01",
        "Plant": "DE01",
        "OrderQuantity": "74",
        "PurchaseOrderQuantityUnit": "PC",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "420.22",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Warehouse Hamburg",
        "DeliveryAddressCityName": "Hamburg",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000019',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000019',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000019',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000019",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1765833818675)/",
              "PurchaseOrderQuantityUnit": "PC",
              "ScheduleLineOrderQuantity": "74"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000019',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000019',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000019",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "SC01-ROH-11",
        "Plant": "M201",
        "OrderQuantity": "63",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "421.85",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Manufacturing Plant",
        "DeliveryAddressCityName": "Frankfurt am Main",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000019',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000019',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000019',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000019",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1762535700418)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "63"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000020',PurchaseOrderItem='10')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000020',PurchaseOrderItem='10')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000020",
        "PurchaseOrderItem": "10",
        "PurchaseOrderItemText": "SC01-FERT-01",
        "Plant": "M204",
        "OrderQuantity": "66",
        "PurchaseOrderQuantityUnit": "KG",
        "DocumentCurrency": "EUR",
        "NetPriceAmount": "384.52",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Distribution Center",
        "DeliveryAddressCityName": "Berlin",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000020',PurchaseOrderItem='10')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000020',PurchasingDocumentItem='10',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000020',PurchasingDocumentItem='10',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000020",
              "PurchasingDocumentItem": "10",
              "ScheduleLineDeliveryDate": "/Date(1766875984297)/",
              "PurchaseOrderQuantityUnit": "KG",
              "ScheduleLineOrderQuantity": "66"
            }
          ]
        }
      },
      {
        "__metadata": {
          "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000020',PurchaseOrderItem='20')",
          "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000020',PurchaseOrderItem='20')",
          "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemType"
        },
        "PurchaseOrder": "4500000020",
        "PurchaseOrderItem": "20",
        "PurchaseOrderItemText": "MM-RAW-001",
        "Plant": "M204",
        "OrderQuantity": "10",
        "PurchaseOrderQuantityUnit": "CV",
        "DocumentCurrency": "USD",
        "NetPriceAmount": "250.01",
        "IsCompletelyDelivered": false,
        "GoodsReceiptIsExpected": true,
        "DeliveryAddressName": "Warehouse Hamburg",
        "DeliveryAddressCityName": "Hamburg",
        "DeliveryAddressCountry": "DE",
        "to_PurchaseOrder": {
          "__deferred": {
            "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItem(PurchaseOrder='4500000020',PurchaseOrderItem='20')/to_PurchaseOrder"
          }
        },
        "to_PurchaseOrderItemNote": {
          "results": []
        },
        "to_ScheduleLine": {
          "results": [
            {
              "__metadata": {
                "id": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000020',PurchasingDocumentItem='20',ScheduleLine='1')",
                "uri": "https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderScheduleLine(PurchasingDocument='4500000020',PurchasingDocumentItem='20',ScheduleLine='1')",
                "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderScheduleLineType"
              },
              "PurchasingDocument": "4500000020",
              "PurchasingDocumentItem": "20",
              "ScheduleLineDeliveryDate": "/Date(1766302030658)/",
              "PurchaseOrderQuantityUnit": "CV",
              "ScheduleLineOrderQuantity": "10"
            }
          ]
        }
      }
    ]
  }
};