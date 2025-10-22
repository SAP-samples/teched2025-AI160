package com.sap.mockServerController;

import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderScheduleLine;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;
import java.util.function.Supplier;
import java.util.stream.Stream;

@Service
class DataGenerator {

  @Value("${app.data.generate-seed:100}")
  private int generateDataSeed;

  @Value("${app.data.generate-items:40}")
  private int numberOfItems;

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

  List<PurchaseOrderItem> generatePurchaseOrderItems() {
    return Stream.generate(new PurchaseOrderGenerator(new Random(generateDataSeed)))
        .limit(numberOfItems)
        .toList();
  }

  @RequiredArgsConstructor
  private class PurchaseOrderGenerator implements Supplier<PurchaseOrderItem> {
    private final Random r;

    @Override
    public PurchaseOrderItem get() {
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
      return String.valueOf(r.nextInt(45000, 46000));
    }

    private String generatePOI() {
      return String.format("%02d", r.nextInt(10, 100));
    }

    private String generateText() {
      String adjective = adjectives.get(r.nextInt(adjectives.size()));
      adjective = adjective.substring(0, 1).toUpperCase() + adjective.substring(1);
      String item = items.get(r.nextInt(items.size()));
      item = item.substring(0, 1).toUpperCase() + item.substring(1);
      String company = companies.get(r.nextInt(companies.size()));
      return r.nextBoolean()
          ? String.format("%s %s from %s", adjective, item, company)
          : String.format("%s's %s %s", company, adjective, item);
    }

    private String generateCity() {
      return cities.get(r.nextInt(cities.size()));
    }

    private String generatePlant() {
      String city = generateCity();
      int number = r.nextInt(1, 5);
      return city.substring(0, 3).toUpperCase() + "0" + number;
    }

    private BigDecimal generateQuantity() {
      return BigDecimal.valueOf(r.nextLong(1, 1000));
    }

    private PurchaseOrderScheduleLine generateScheduleLine() {
      return PurchaseOrderScheduleLine.builder()
          .scheduleLineDeliveryDate(generateDate())
          .build();
    }

    private LocalDateTime generateDate() {
      if (r.nextBoolean()) {
        return LocalDateTime.now().minusDays(r.nextInt(30));
      } else {
        return LocalDateTime.now().plusDays(r.nextInt(30));
      }
    }
  }
}
