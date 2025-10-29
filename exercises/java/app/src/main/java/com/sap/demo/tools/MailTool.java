package com.sap.demo.tools;

import com.sap.demo.Application.UiHandler;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;

import java.util.Optional;

/** Tool for mails. */
public record MailTool(UiHandler ui) {
  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(MailTool.class);

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
    log.info("[TOOL START] Asking user to confirm email regarding \"{}\".", mailRequest.subject);
    long time = System.currentTimeMillis();
    String promptTitle = "Confirm email";

    String promptText = "Please confirm sending the following email to %s with the subject %s"
        .formatted(mailRequest.address(), mailRequest.subject());

    Optional<String> response = ui.promptUser(promptTitle, promptText, mailRequest.text());

    if (response.isPresent()) {
      log.info("[TOOL END] Email sent successfully after {}! To: {}; Subject: {}; Body: {}",
          System.currentTimeMillis()-time,
          mailRequest.address(), mailRequest.subject(), response.get());

      ui.notify("Email sent to %s".formatted(mailRequest.address()));
      return "Email sent";
    }
    log.info("[TOOL END] Email was not sent after {}ms.", System.currentTimeMillis()-time);
    return "Email not sent";
  }

  /** Tool to get a mail address. */
  @Tool(description = "Get the email address of the customer from the purchase order item.")
  public String getMailAddress(@ToolParam final String purchaseOrderItem) {
    return "customer@sap.com";
  }
}
