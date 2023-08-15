# Assignment1 Notes

1.	What is Emmet?
Emmet is a shortcut for HTML code that generates boiler plate or completes the code. Its main purpose is to increase efficiency.
2.	Difference between a Library and Framework?
React is a library & Angular is framework. In library the code is already written we can call it like we call a function. It is more flexible and we can choose in which part of our application we want to use it. For eg. in my website I can make the search tab in my navbar with the help of React. The existing code will adapt with the library. But on the contrary, in the framework there is predefine structure which controls  the flow of your application requiring you to adept your code to the framework’s design.
3.	What is CDN? Why do we use it?
CDN is Content Delivery Network. It is network of servers strategically located all over the world. It sends the requested data from the nearest server to the user thereby reducing the overall distance data need to travel, saving the bandwidth and improves performance of the website.
4.	Why is React known as React?
It reacts to changes in data and efficiently updated the user interface in response that’s why it is called react.
5.	What is crossorigin in script tag?
It is used to share the resources(like video, styles, fonts, etc) from one domain to another domain. It also handles the CORS(Cross Origin Resource Sharing)  request that checks whether it is safe to allow for sharing the resources from other domain.
6.	What is diference between React and ReactDOM
React is a library that is used to create UI components whereas ReactDOM is used to integrate the React with the web browser DOM. It allows to render the react components into the browser.
7.	What is difference between react.development.js and react.production.js files via CDN?
In the production the JS files are more optimized for better performance which is not the case in the development mode.
8.	What is async and defer?
Async and Differ are the attributes which are used with script tags. They are used to efficiently load the external scripts into our web page. Below are the methods how they parse the script and execute. Generally the defer method is used the most. The reason for this is because the async attribute does not guarantee the order of execution and in case if the scripts are inter-dependent on each other it may break the code whereas the defer attribute guarantee the order of execution. For eg, Google Analytics scripts they are quite modular and independent of each other so it is wise to use async attribute there.
 
![image](https://github.com/dm-lalwani/namaste-react-dml/assets/77269586/24a51758-64d3-4b3b-9c00-de82d87f76af)
