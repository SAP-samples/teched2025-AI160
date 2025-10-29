# Preparation

By completing these steps, you will have a [Spring Boot](https://spring.io/projects/spring-boot)-based web application up and running.

<details><summary>Tutorial: TechEd2025 notebooks</summary>

<details><summary><b>[STEP 1]</b> Checkout Session Repository</summary>

<img src="img/img.png" alt="" style="clip-path: inset(11.6% 0.3% 5% 0.4%)">
<img src="img/img_1.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_8.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_9.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_10.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_11.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_12.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_13.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_14.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">

</details>

<details><summary><b>[STEP 2]</b> Initial Compile Application</summary>

<img src="img/img_15.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_16.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_17.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">

</details>


<details><summary><b>[STEP 3]</b> Add Credentials To Environment</summary>

<img src="img/img_18.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_19.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_20.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_21.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">

</details>


<details><summary><b>[STEP 4]</b> Run Application</summary>

<img src="img/img_22.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_23.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_24.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_25.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">
<img src="img/img_26.png" alt="" style="clip-path: inset(8% 0.3% 5% 0.4%)">

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