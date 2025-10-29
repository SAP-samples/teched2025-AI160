# Preparation

By completing these steps, you will have a [Spring Boot](https://spring.io/projects/spring-boot)-based web application up and running.

<details><summary>Tutorial: TechEd2025 notebooks</summary>

<details><summary><b>[STEP 1]</b> Checkout Session Repository</summary>

* 1.1 Open Eclipse
  ![img/img.png](img/img.png)
* 1.2 Collapse irrelevant views  
  ![img/img_1.png](img/img_1.png)
* 1.3 Click `Import projects...` > `Prokects from Git (with smart import)`
  ![img/img_8.png](img/img_8.png)
* 1.4 Select `Clone URI`
  ![img/img_9.png](img/img_9.png)
* 1.5 Enter `https://github.com/SAP-samples/teched2025-AI160` and click `Next`
  ![img/img_10.png](img/img_10.png)
* 1.6 Have `main` selected, click `Next`
  ![img/img_11.png](img/img_11.png)
* 1.7 Have default directory and click `Next`
  ![img/img_12.png](img/img_12.png)
* 1.8 Have both folders selected, click `Finish`
  ![img/img_13.png](img/img_13.png)
* 1.9 The project is loaded with two entries in the "Package Explorer"
  ![img/img_14.png](img/img_14.png)

</details>

<details><summary><b>[STEP 2]</b> Initial Compile Application</summary>

* 2.1 Press "Run" button > `Run As` > `Maven install`
  ![img/img_15.png](img/img_15.png)
* 2.2 A console dialog pops up
  ![img/img_16.png](img/img_16.png)
* 2.3 The build completes with `BUILD SUCCESS` 
  ![img/img_17.png](img/img_17.png)

</details>


<details><summary><b>[STEP 3]</b> Add Credentials To Environment</summary>

* 3.1 Right-click on `app` root element > `New` > `File` 
  ![img/img_18.png](img/img_18.png)
* 3.2 File name: `.env`, and press `Finish` 
  ![img/img_19.png](img/img_19.png)
* 3.3 When asked for special editor/extension, juft press `Cancel`
  ![img/img_20.png](img/img_20.png)
* 3.4 Enter service key like below
  ![img/img_21.png](img/img_21.png)

</details>


<details><summary><b>[STEP 4]</b> Run Application</summary>

* 4.1 Press "Run" button with drop-down > `Run As` > `Maven build...`
  ![img/img_22.png](img/img_22.png)
* 4.2 Enter `spring-boot:run` into "Goals" and press `Run`
  ![img/img_23.png](img/img_23.png)
* 4.3 If asked by firewall what to do with the server, just press `Allow`
  ![img/img_24.png](img/img_24.png)
* 4.4 The server application will start and idle after a few seconds with: `Application running at http://localhost:8080/`
  ![img/img_25.png](img/img_25.png)
* 4.5 You can now start the Browser and navigate to http://localhost:8080 - This is your application frontend!
  ![img/img_26.png](img/img_26.png)

</details>

</details>

<details><summary>Tutorial: Bring-Your-Own-Device</summary>

### Prerequisites:
- [ ] Java (JRE17+) and Maven installed.
- [ ] Java IDE (e.g., IntelliJ or Eclipse)
- [ ] Checkout (or download code from) repository: https://github.com/SAP-samples/teched2025-AI160


### 1. Navigate to the Application Directory:

Assuming you are still in the root directory of the repository, navigate to the app folder:
```shell
cd exercises/java/app
```

### 2. Install Dependencies:

Install the required dependencies using:
```shell
mvn clean install
```
> [!NOTE]
> `mvn clean install` removes any pre-built files for your compiled application and compiles the application into an executable binary. Also, it downloads and installs missing dependencies into your local Maven repository (e.g. `~/.m2`).

### 3. Start the Application:

You can run the application in your IDE by directly executing the `Application` class, or alternatively use the following command to start the app locally via Maven:

```shell
mvn spring-boot:run
```

### 4. Verify the Application is Running:
After a few seconds, you should see the following log message:
```
Tomcat initialized with port 8080 (http)
```

### 5. Access the Application:
Open your browser and visit http://localhost:8080/.
You should see a page title **Purchase Order Agent**.


#### Troubleshooting:
If you encounter errors, please look closely at the exception.
And try checking if port 8080 is in use:
```shell
lsof -i :8080
```

</details>

## Summary
**Congratulations!**

Your application is up and running.

You’re now ready to move on to the next step.
Continue to [Exercise 1 - Working with PO Items: Tool Usage and Data Fetching from S/4](../ex1/README.md).