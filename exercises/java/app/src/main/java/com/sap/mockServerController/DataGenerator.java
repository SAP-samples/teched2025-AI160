package com.sap.mockServerController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderScheduleLine;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
class DataGenerator {
  @Value("${app.data.generate-on-startup:false}")
  private boolean generateDataOnStartup;

  @Value("${app.data.number-of-items:40}")
  private int numberOfItems;

  private ObjectMapper JACKSON =
      new ObjectMapper()
          .setSerializationInclusion(com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL);

  private List<String> cities =
      List.of(
          "Berlin",
          "Leipzig",
          "Dresden",
          "Hamburg",
          "Munich",
          "Cologne",
          "Frankfurt",
          "Stuttgart",
          "Düsseldorf",
          "Rostock");
  private List<String> items =
      List.of(
          "pencil",
          "eraser",
          "notebook",
          "stapler",
          "paper clips",
          "scissors",
          "mug",
          "charging cable");
  private List<String> adjectives =
      List.of(
          "fancy",
          "fabulous",
          "wonderful",
          "amazing",
          "brilliant",
          "charming",
          "delightful",
          "elegant",
          "graceful",
          "magnificent");
  private List<String> companies =
      List.of(
          "TechNova Inc.",
          "BlueOrbit Solutions",
          "GreenLeaf Enterprises",
          "Skyline Dynamics",
          "QuantumCore Systems",
          "BrightPath Innovations",
          "NextGen Ventures",
          "Apex Global",
          "FusionWorks Ltd.",
          "Pioneer Edge");

  @PostConstruct
  void generatePurchaseOrderItems() {
    if (!generateDataOnStartup) {
      return;
    }
    List<PurchaseOrderItem> list = new ArrayList<>();
    for (int i = 0; i < numberOfItems; i++) {
      list.add(generateNewItem());
    }
    writeItemFile(list);
  }

  private PurchaseOrderItem generateNewItem() {
    String po = generatePO();
    String poi = generatePOI();
    return PurchaseOrderItem.builder()
        .purchaseOrder(po)
        .purchaseOrderItem(poi)
        .purchaseOrderItemText(generateText())
        .orderQuantity(generateQuantity())
        .plant(generatePlant())
        .deliveryAddressCityName(generateCity())
        .scheduleLine(generateScheduleLine())
        .build();
  }

  private String generatePO() {
    return String.valueOf(45000 + (int) (Math.random() * 1000));
  }

  private String generatePOI() {
    return String.format("%02d", 10 + (int) (Math.random() * 90));
  }

  private String generateText() {
    String adjective = adjectives.get((int) (Math.random() * adjectives.size()));
    adjective = adjective.substring(0, 1).toUpperCase() + adjective.substring(1);
    String item = items.get((int) (Math.random() * items.size()));
    item = item.substring(0, 1).toUpperCase() + item.substring(1);
    String company = companies.get((int) (Math.random() * companies.size()));
    return Math.random() > 0.5
        ? String.format("%s %s from %s", adjective, item, company)
        : String.format("%s's %s %s", company, adjective, item);
  }

  private String generateCity() {
    return cities.get((int) (Math.random() * cities.size()));
  }

  private String generatePlant() {
    String city = generateCity();
    int number = (int) (Math.random() * 4) + 1;
    return city.substring(0, 3).toUpperCase() + "0" + number;
  }

  private BigDecimal generateQuantity() {
    return BigDecimal.valueOf(1.0 + (int) (Math.random() * 1000));
  }

  private PurchaseOrderScheduleLine generateScheduleLine() {
    return PurchaseOrderScheduleLine.builder()
        .scheduleLineDeliveryDate(generateDate())
        .build();
  }

  private LocalDateTime generateDate() {
    if (Math.random() > 0.5) {
      return LocalDateTime.now().minusDays((int) (Math.random() * 30));
    } else {
      return LocalDateTime.now().plusDays((int) (Math.random() * 30));
    }
  }

  private void writeItemFile(List<PurchaseOrderItem> list) {
    try {
      JACKSON
          .writerWithDefaultPrettyPrinter()
          .writeValue(new java.io.File("src/main/resources/PurchaseOrderItem_example.json"), list);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
