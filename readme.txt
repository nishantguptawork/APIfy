STEPS TO RUN SERVER :
    1. Install stable version of nodejs from the link https://nodejs.org/en/download/
    2. Navigate to project folder and open command prompt.
    3. Write command "npm install" on the root project folder.
    4. After successfully installing the npm modules from the above command , execute command "node .".
    5. The server listens on localhost:3000 and you can navigate to localhost:3000/explorer for the exposed APIs.


NOTE : The code is not fully functional due to technical challenges faced as given below: 
    1. The mixin used for importing csv data to models defined is not working currently.
    2. The data can be manually uploaded to the models using the swagger provided by loopback on "localhost:3000/explorer".
    3. The filters work as expected from the swagger but the same filters are not working from the server remote method scope. Issue already raised on github.
    4. The models with manual data uploading from swagger is working as expected.