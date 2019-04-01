
## Installation ##

You need to have [Java 8 JDK](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html) installed along with [maven](https://maven.apache.org/).

To run the tests locally with Chrome, install ChromeDriver from (http://chromedriver.chromium.org) and add its location to your system PATH.

To run the tests locally with Firefox, install GeckoDriver from (https://github.com/mozilla/geckodriver/releases) and add its location to your system PATH.

To install all dependencies, run

```console
$ mvn clean install
```

## Running tests ##

```console
$ mvn test
```




