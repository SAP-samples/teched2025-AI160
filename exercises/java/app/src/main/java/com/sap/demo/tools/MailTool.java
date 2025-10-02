package com.sap.demo.tools;

import com.sap.demo.ui.PurchaseOrderMonitoringService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;

/** Tool for mails. */
@RequiredArgsConstructor
@Slf4j
public class MailTool {

  private final PurchaseOrderMonitoringService monitoringService;

  /**
   * Request class for the sendMailTool
   *
   * @param address The mail address of the recipient
   * @param subject The subject line of the mail
   * @param text The main text of the mail
   */
  public record Request(String address, String subject, String text) {}

  /** Tool to send a mail. */
  @Tool(description = "Send an email to satisfy the customer and close the escalation.")
  public String sendMail(@ToolParam Request mailRequest) {
    var response =
        monitoringService.promptUser(
            "Confirm email",
            "Please confirm sending the following email to %s with the subject %s"
                .formatted(mailRequest.address(), mailRequest.subject()),
            mailRequest.text());

    if (response.isPresent()) {
      log.debug(
          "Email sent successfully: To{}, Subject{}, Body{}%n",
          mailRequest.address(), mailRequest.subject(), response.get());

      monitoringService.notifySubscribers("Email sent to %s".formatted(mailRequest.address()));
      return "Email sent";
    }
    return "Email not sent";
  }

  /** Tool to get a mail address. */
  @Tool(description = "Get the email address of the customer from the purchase order item.")
  public String getMailAddress(@ToolParam final String purchaseOrderItem) {
    return "customer@sap.com";
  }
}
