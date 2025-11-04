# Preparation

By completing these steps, you will have a [Spring Boot](https://spring.io/projects/spring-boot)-based web application up and running.

This guide assumes you are taking part in the hands-on workshop at TechEd 2025 in Berlin using the provided laptops.
If you follow this guide anywhere else and use your own device, please find relevant information in [this guide](OwnDeviceGuide.md) instead.


## Tutorial - TechEd 2025

There are four steps to get the application up and running in Eclipse.

### Step 1: Checkout Session Repository

* 1.1 Open Eclipse
  ![img/img.png](img/img.png)
* 1.2 Collapse irrelevant views  
  ![img/img_1.png](img/img_1.png)
* 1.3 Click `Import projects...` > `Projects from Git (with smart import)`
  ![img/img_8.png](img/img_8.png)
* 1.4 Select `Clone URI` and click `Next`
  ![img/img_9.png](img/img_9.png)
* 1.5 Enter `https://github.com/SAP-samples/teched2025-AI160` and click `Next`
  ![img/img_10.png](img/img_10.png)
* 1.6 Have (only) `main` selected, click `Next`
  ![img/img_11.png](img/img_11.png)
* 1.7 Optionally set the directory and click `Next`
  ![img/img_12.png](img/img_12.png)
* 1.8 Have both folders selected and click `Finish`
  ![img/img_13.png](img/img_13.png)
* 1.9 The project is loaded with two entries in the "Package Explorer"
  ![img/img_14.png](img/img_14.png)


### Step 2: Initially Compile the Application

* 2.1 Select the `app` folder, press the 'Run' button (green "Play" button) > `Run As` > `Maven install`
  ![img/img_15.png](img/img_15.png)
* 2.2 A console dialog pops up
  ![img/img_16.png](img/img_16.png)
* 2.3 The build completes with `BUILD SUCCESS` 
  ![img/img_17.png](img/img_17.png)


### Step 3: Check Test System Credentials
  
The test system access details are pre-filled in the [`exercises/java/app/.env`](../app/.env) file, in the below format.
```
AICORE_SERVICE_KEY={"clientid": "placeholder", "clientsecret": "placeholder", "url": "placeholder", "serviceurls": {"AI_API_URL": "placeholder"} }
```


### Step 4: Run Application

* 4.1 Press 'Run' button (green "Play" button) with drop-down > `Run As` > `Maven build...`
  ![img/img_22.png](img/img_22.png)
* 4.2 Enter `spring-boot:run` into "Goals" and press `Run`
  ![img/img_23.png](img/img_23.png)
* 4.3 If asked by firewall what to do with the server, just press `Allow`
  ![img/img_24.png](img/img_24.png)
* 4.4 The server application will start and idle after a few seconds with: `Application running at http://localhost:8080/`
  ![img/img_25.png](img/img_25.png)
* 4.5 You can now start the Browser and navigate to http://localhost:8080 - This is your application frontend!
  ![img/img_26.png](img/img_26.png)


## Summary
**Congratulations!**

Your application is up and running.

You’re now ready to move on to the next step.
Continue to [Exercise 1 - Working with PO Items: Tool Usage and Data Fetching from S/4](../ex1/README.md).
