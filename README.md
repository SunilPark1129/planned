# Guess The Color
![planned](https://github.com/SunilPark1129/planned/assets/106734133/e45268d5-656b-4a89-b659-d5152b01f2ce.jpg)

Go to website - [Link](https://sp-planned.netlify.app/)

## Project Description

- This is a website-app that allows users to create a daily schedule and go through the steps of executing the schedule, ultimately achieving their goals. I have put maximum consideration into accessibility to ensure that users can easily adapt to the UI. Additionally, I have implemented a drag and drop method to make it easy to use.
- This website does not store data on the server but instead saves data in the user's local storage. I used the persistence method in Zustand.

## How to use
> See how to use this website properly.
> 
|Feature|Description|
|:--:|:--|
|Menu|<img src="https://github.com/SunilPark1129/planned/assets/106734133/6cd97e9b-b29c-4fb4-90ef-d3aa9044942d.jpg"><br><br>There are six icons in the menu:<br><br>Add: Adds items and categories.<br>Delete: Removes items and categories.<br>Edit: Modifies the names of items and categories.<br>Plug-in: Groups items into categories or removes items from categories.<br>Help: Allows users to read the manual.<br>Delete All: Deletes all items and categories.|
|Add|<img src="https://github.com/SunilPark1129/planned/assets/106734133/6676ccbd-2119-449d-9c40-3f63f5ba18c9.jpg"><br><br>Click on the Add icon first to add items. If you have added multiple items, also add a category to group them.|
|Category Interact|<img src="https://github.com/SunilPark1129/planned/assets/106734133/2344f14d-7cd8-4f13-a5f0-379607412338.jpg" height="400"><br><br>Once you have added everything, click on the Plug-in icon to add items to categories.|
|States ready|<img src="https://github.com/SunilPark1129/planned/assets/106734133/31ba0a65-2ca5-4e52-aba9-2d1d79d7addb.jpg" height="400"><br><br>Now, when you look at the screen, you will see that the items have been added to the categories. All the data is stored in the useStore, which is a state management using the Zustand library.|
|Drag|<img src="https://github.com/SunilPark1129/planned/assets/106734133/0dd418bb-88ec-4cea-a30d-4659b5f3459d.jpg" height="400"><br><br>Drag to the right to proceed to the next step.|
|Delete|<img src="https://github.com/SunilPark1129/planned/assets/106734133/7834c165-4574-4704-aa5f-032ed0efb669.jpg" height="400"><br><br>Click on the Delete icon to remove unnecessary items from the list.|
|Edit|<img src="https://github.com/SunilPark1129/planned/assets/106734133/72d945fc-0701-4d06-92f6-49da97ddbdbb.jpg" height="400"><br><br>Click on the Edit icon to change the names of items and categories.|
|Delete All|<img src="https://github.com/SunilPark1129/planned/assets/106734133/1a5a8247-32af-42cb-a7a2-c1837f4a7b61.jpg"><br><br>Click on the Delete All icon to reset and delete all items and categories. It will clear all the values stored in useStore.|
|Help|<img src="https://github.com/SunilPark1129/planned/assets/106734133/f70099c4-42ca-41a6-a0e5-5c38ef51f761.jpg" height="400"><br><br>Click on the Help icon to read the guidelines.|

## Technology Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
scss
zustand

## Installation
1. Clone the repo
```
git clone https://github.com/SunilPark1129/planned.git
```
2. Install all dependencies
```
npm install
```
> Dependencies I have installed :<br>Vite+React<br>SCSS<br>Zustand 

3. run the website
```
npm run dev
```

## Self-improvement
- Previously, I used useContext, but this time I used Zustand to optimize rendering and improve web performance.
- I made efforts to minimize repetitive tasks as much as possible.
- I had the opportunity to study in more detail about how to drag and drop.

## Project Status
Completed
