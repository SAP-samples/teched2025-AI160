package com.sap.demo.tools;

import com.sap.demo.Application.UiHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;

import java.util.Optional;

/** Tool for mails. */
@RequiredArgsConstructor
@Slf4j
public class MailTool {

  private final UiHandler ui;

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
    String promptTitle = "Confirm email";

    String promptText = "Please confirm sending the following email to %s with the subject %s"
        .formatted(mailRequest.address(), mailRequest.subject());

    Optional<String> response = ui.promptUser(promptTitle, promptText, mailRequest.text());

    if (response.isPresent()) {
      String msg = "Email sent successfully! To: {}; Subject: {}; Body: {}%n";
      log.debug(msg, mailRequest.address(), mailRequest.subject(), response.get());

      ui.notify("Email sent to %s".formatted(mailRequest.address()));
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
