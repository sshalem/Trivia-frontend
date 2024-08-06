### Combine React SPA app in a Spring boot app as a Single application

- Let's see how to combine a ReactJS SPA inside a Spring boot App

https://www.youtube.com/watch?v=Y6YYPDVmhYw&ab_channel=FastandSimpleDevelopment

https://github.com/ThomasJay/SpringBootLovesReact/tree/main

https://developer.okta.com/blog/2022/06/17/simple-crud-react-and-spring-boot#call-your-spring-boot-api-and-display-the-results


### Step 1:

In the react app , Add to `package.json` , the following line:

  `"proxy": "http://localhost:8080",`


### Step 2:

build the react app and copy the `dist` folder , to the static folder in the Spring boot app:

  `npm run build`  - for Vite app


### Step 3:

create a filter and add the following vode to it:

- notice I add 3 routes that are from my code of controller and from the dist folder

```
				&& !path.startsWith("/question")
				&& !path.endsWith("/assets/index-o67FmqSX.js")
				&& !path.endsWith("/assets/index-Hz4A7n5P.css"))
```

- Pay attention , we must add [`@Component`](#-) annotaion to the filter

```java
@Component
public class SpaWebFilter extends OncePerRequestFilter {

	public static final Logger LOGGER = LoggerFactory.getLogger(SpaWebFilter.class);
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String path = request.getRequestURI();
		Log.infoGreen(LOGGER, "Path: \"" + path + "\"");
		
		/**
		 * After I build for production , ReactJS project (VITE)
		 * I get 
		 * 1. assets folder with `index-***.CSS` , `index-***.JS` , and images inside assets if I had any 
		 * 2. index.html
		 * 3. vite.svg
		 */
		
		// As we know in SPA we have only one HTML file , and in SPA all links are related to index.html, Thus it is known as the path : "/" .
		// Let's look In a situation , for example , where :
		// 1. the URL is "/info" ,  
		// 2. and "/info" is a valid URL of the SPA  
		// 3. and user REFRESHES the page
		
		// If "info" , is NOT equal/startsWith/endsWith to list below, Then , I forward to the request to /index.html
		// These are known paths & File extensions.
		
		if (//  URL's I use in Controller and index.html
			//  which equals/startsWith/endsWith
				!path.equals("/")
				&& !path.startsWith("/h2")
				&& !path.startsWith("/question")
				// && !path.startsWith("/vite") // I have "svg" in the file extension below
				&& !path.endsWith("/assets/index-o67FmqSX.js")
				&& !path.endsWith("/assets/index-Hz4A7n5P.css"))
										
				&& !path.startsWith("/api")	
				&& !path.startsWith("/static")
				&& !path.startsWith("/manifest.json") 
				&& !path.startsWith("/favicon.ico")
				&& !path.startsWith("/robots.txt") 
				
				//  URL's which are file extensions			
				&& !path.endsWith("xml") 
				&& !path.endsWith("json")
				&& !path.endsWith("jpg") 
				&& !path.endsWith("jpeg") 
				&& !path.endsWith("gif") 
				&& !path.endsWith("png")
				&& !path.endsWith("svg")
				
				) {

			Log.infoYellow(LOGGER, "Path: \"" +  path + "\" NOT Equal/StartsWith/EndsWith to the path List , thus, Filter forwarding to /index.html");
			System.out.println();
			request.getRequestDispatcher("/index.html").forward(request, response);
			return;
		}
		
		Log.infoGreen(LOGGER, "SpaWebFilter - Normal Filter Chain");		
		filterChain.doFilter(request, response);
	}
}
```


### step 4:

Test the app , and see that even if I refresh the page , I still get the results and current url.


