package com.sap.demo.ui;

import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.progressbar.ProgressBar;

public class LoadingScreen extends Dialog {

  private ProgressBar progressBar;
  private Div progressContainer;
  private Span statusText;

  private final String[] loadingStages = {
      "Analyzing user input",
      "Analyzing user input",
      "Filtering purchase orders",
      "Filtering purchase orders",
      "Summarizing the final result",
      "Summarizing the final result"
  };

  public LoadingScreen() {
    // make it non-closable
    this.setCloseOnEsc(false);
    this.setCloseOnOutsideClick(false);
    this.getHeader().removeAll();

    // build progress bar
    initProgressBar();
    initProgressContainer();

    // content inside
    VerticalLayout content = new VerticalLayout();
    content.add(progressContainer);
    content.setAlignItems(FlexComponent.Alignment.CENTER);
    content.setSpacing(true);
    this.add(content);
  }

  private void initProgressBar() {
    progressBar = new ProgressBar();
    progressBar.setMin(0);
    progressBar.setMax(1);
    progressBar.setValue(0);
    progressBar.setWidth("300px");
  }

  private void initProgressContainer() {
    statusText = new Span("");
    statusText.getStyle().set("font-weight", "bold");
    progressContainer = new Div();
    progressContainer.add(progressBar, statusText);
    progressContainer.getStyle()
        .set("display", "flex")
        .set("flex-direction", "column")
        .set("align-items", "center")
        .set("gap", "10px");
  }

  void startLoadingProcess() {
    progressBar.setValue(0);
    statusText.setText(loadingStages[0]);
    simulateLoadingProgressWithStages();
  }

  private void simulateLoadingProgressWithStages() {
    Thread progressThread = new Thread(() -> {
      try {
        for (int stage = 0; stage < loadingStages.length; stage++) {
          final int currentStage = stage;
          final double progress = (double) stage / (loadingStages.length - 1);

          getUI().ifPresent(ui -> ui.access(() -> {
            progressBar.setValue(progress);
            statusText.setText(loadingStages[currentStage]);
          }));

          Thread.sleep(getLoadingStageDuration(stage));
        }

      } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
      }
    });

    progressThread.start();
  }

  private long getLoadingStageDuration(int stage) {
    return switch (stage) {
      case 0 -> 2000;
      case 1 -> 2000;
      case 2 -> 1500;
      case 3 -> 2500;
      case 4 -> 1500;
      case 5 -> 500;
      default -> 1000;
    };
  }

  void startEscalationProcess() {
    progressBar.setValue(0);
    statusText.setText("Processing Escalation");
    simulateEscalationProgressWithStages();
  }

  private void simulateEscalationProgressWithStages() {
    Thread progressThread = new Thread(() -> {
      try {
        for (int stage = 0; stage < 4; stage++) {
          final double progress = (double) stage / 3;

          getUI().ifPresent(ui -> ui.access(() -> {
            progressBar.setValue(progress);
          }));
          Thread.sleep(getEscalationStageDuration(stage));
        }
      } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
      }
    });

    progressThread.start();
  }

  private long getEscalationStageDuration(int stage) {
    return switch (stage) {
      case 0 -> 700;
      case 1 -> 1500;
      case 2 -> 1100;
      case 3 -> 1300;
      default -> 1000;
    };
  }
}
