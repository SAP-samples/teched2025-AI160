package com.sap.demo.tools;

import java.time.LocalDateTime;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.stereotype.Component;

/** Tool to get the current date and time. */
public class DateTimeTool {
  @Tool(description = "Get the current date and time.")
  public LocalDateTime getCurrentDateTime() {
    return LocalDateTime.now();
  }
}
