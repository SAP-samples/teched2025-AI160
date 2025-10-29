package com.sap.demo.tools;

import java.time.LocalDateTime;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.stereotype.Component;

/** Tool to get the current date and time. */
public class DateTimeTool {
  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(DateTimeTool.class);

  @Tool(description = "Get the current date and time.")
  public LocalDateTime getCurrentDateTime() {
    log.info("[TOOL] Current date-time was requested.");
    return LocalDateTime.now();
  }
}
