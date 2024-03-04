


// All post Data API
const loadAllData = async () => {

  handleSpinner("block");

  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
  const data = await res.json()
  const loadData = data.posts;

  showCardData(loadData)
  // btnClick(loadData)

};


//  All Latest post Data API
const loadAllLatestPost = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
  const data = await res.json()
  const latestPosts = data;

  latestPostData(latestPosts);

};



// All Post Search API

const postSearchData = async (searchText) => {

  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)
  const data = await res.json()
  const searchID = data.posts;
  //  console.log(searchID)

  showSearchData(searchID)



}

// // All Show Card Data Function
const showCardData = (searchID) => {

  handleSpinner("none");

  const cardDiv = document.getElementById('card');

  cardDiv.textContent = '';

  setTimeout(() => {

    searchID.forEach(post => {

      // console.log(post);
      let isActiveBtn = '';
      if (post.isActive) {
        isActiveBtn = `<span class="flex w-8 h-8 lg:w-5 lg:h-5 me-3 absolute   ml-[105px] lg:ml-[100px] bg-green-500 rounded-full"></span>`;
      }
      else {
        isActiveBtn = `<span class="flex w-8 h-8 lg:w-5 lg:h-5 me-3 absolute ml-[105px] lg:ml-[100px] bg-red-500 rounded-full"></span>`;
      }

      const createDiv = document.createElement('div');



      createDiv.innerHTML = `
      <div class="lg:flex relative   p-6 border rounded-lg ">
      
      <div class="ml-24 lg:ml-10">
      ${isActiveBtn}
        <img class="w-[150px] h-[150px] lg:w-[150px] lg:h-[120px] rounded-full lg:rounded-lg" src="${post.image}" alt="">
      </div>
      <div class="ml-6 mt-6 lg:mt-0 w-full lg:ml-10">
        <div class="flex text-center">
    
          <div class="flex lg:justify-between border-1 border-[#797DFC] relative">
            <div>
              <p class="text-[#131318] mr-20 lg:mr-32 opacity-75 font-medium"># ${post.category}</p>
            </div>
            <div>
              <p class="text-[#131318]   opacity-75 font-medium">Author : ${post.author.name}</p>
            </div>
          </div>
    
        </div>
        <div>
          <h2 class="text-[#131318] font-extrabold text-xl mt-3">${post.title}</h2>
        </div>
        <div>
          <p class="text-[#131318] text-base font-medium   mt-3 opacity-80">${post.description}</p>
        </div>
  
        <div class="divider "></div> 
  
        <div class=" lg:flex lg:justify-between mt-6 text-center">
  
          <div class="flex text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M9.33333 10.4998H18.6667M9.33333 15.1665H16.3333M10.5 20.9998H7C6.07174 20.9998 5.1815 20.6311 4.52513 19.9747C3.86875 19.3183 3.5 18.4281 3.5 17.4998V8.1665C3.5 7.23825 3.86875 6.34801 4.52513 5.69163C5.1815 5.03525 6.07174 4.6665 7 4.6665H21C21.9283 4.6665 22.8185 5.03525 23.4749 5.69163C24.1313 6.34801 24.5 7.23825 24.5 8.1665V17.4998C24.5 18.4281 24.1313 19.3183 23.4749 19.9747C22.8185 20.6311 21.9283 20.9998 21 20.9998H17.5L14 24.4998L10.5 20.9998Z"
                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
    
            <h2 class="  text-[#131318] ml-3 text-base">${post.comment_count}</h2>
    
            <div class="ml-5"><i class="fa-regular fa-eye text-center"></i></div>
    
            <h2 class="  text-[#131318] ml-3 text-base">${post.view_count}</h2>
    
    
            <div class="text-center ml-5">
              <i class="fa-regular fa-clock"></i>
            </div>
    
            <h2 class="  text-[#131318] ml-3 text-base">${post.posted_time} min</h2>
    
    
          </div>
    
    
          <div class="mt-10 lg:mt-0 ">
            <button onclick="btnClick('${post.title.replace('\'', '')}',${post.view_count})" >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <g clip-path="url(#clip0_19_556)">
                  <path
                    d="M13.9997 0C6.26796 0 0 6.26814 0 13.9999C0 21.7314 6.26796 28 13.9997 28C21.7314 28 27.9998 21.7314 27.9998 13.9999C27.9998 6.26814 21.7314 0 13.9997 0ZM14 4.91741L22.2846 10.0835H5.71532L14 4.91741ZM22.3878 18.333H22.387C22.387 19.1616 21.7154 19.8331 20.8869 19.8331H7.113C6.28438 19.8331 5.61294 19.1615 5.61294 18.333V10.4122C5.61294 10.3245 5.6219 10.2393 5.63646 10.1556L13.5519 15.0914C13.5617 15.0975 13.572 15.1016 13.582 15.1072C13.5925 15.113 13.6031 15.1186 13.6137 15.1239C13.6696 15.1527 13.7272 15.176 13.7861 15.1912C13.7922 15.1929 13.7983 15.1936 13.8043 15.195C13.8689 15.2102 13.9343 15.2197 13.9997 15.2197H14.0001C14.0006 15.2197 14.0011 15.2197 14.0011 15.2197C14.0664 15.2197 14.1318 15.2105 14.1964 15.195C14.2025 15.1935 14.2086 15.1929 14.2146 15.1912C14.2734 15.176 14.3308 15.1527 14.387 15.1239C14.3976 15.1186 14.4083 15.113 14.4187 15.1072C14.4286 15.1016 14.4391 15.0975 14.4488 15.0914L22.3643 10.1556C22.3788 10.2393 22.3878 10.3244 22.3878 10.4122V18.333Z"
                    fill="#10B981" />
                </g>
                <defs>
                  <clipPath id="clip0_19_556">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg></button>
          </div>
    
    
    
    
        </div>
    
    
      </div>
  
  
      
      `;






      cardDiv.appendChild(createDiv);







    })
  }, 2000);




}



// All showSearchData Data Function
const showSearchData = (searchID) => {

  handleSpinner("none");

  const cardDiv = document.getElementById('card');

  cardDiv.textContent = '';

  searchID.forEach(post => {
    // console.log(post);
    let isActiveBtn = '';
    if (post.isActive) {
      isActiveBtn = `<span class="flex w-8 h-8 lg:w-5 lg:h-5 me-3 absolute  ml-[105px] lg:ml-[100px] bg-green-500 rounded-full"></span>`;
    }
    else {
      isActiveBtn = `<span class="flex w-8 h-8 lg:w-5 lg:h-5 me-3 absolute ml-[105px] lg:ml-[100px] bg-red-500 rounded-full"></span>`;
    }




    const createDiv = document.createElement('div');



    createDiv.innerHTML = `
    <div class="lg:flex relative p-6 border rounded-lg ">
    
    <div class="ml-24 lg:ml-10">
    ${isActiveBtn}
      <img class="w-[150px] h-[150px] lg:w-[150px] lg:h-[120px] rounded-full lg:rounded-lg" src="${post.image}" alt="">
    </div>
    <div class="ml-6 mt-6  w-full lg:mt-0 lg:ml-10">
      <div class="flex text-center">
  
        <div class="flex lg:justify-between border-1 border-[#797DFC] relative">
          <div>
            <p class="text-[#131318] mr-20 lg:mr-32 opacity-75 font-medium"># ${post.category}</p>
          </div>
          <div>
            <p class="text-[#131318]   opacity-75 font-medium">Author : ${post.author.name}</p>
          </div>
        </div>
  
      </div>
      <div>
        <h2 class="text-[#131318] font-extrabold text-xl mt-3">${post.title}</h2>
      </div>
      <div>
        <p class="text-[#131318] text-base font-medium   mt-3 opacity-80">${post.description}</p>
      </div>

      <div class="divider "></div> 

      <div class=" lg:flex lg:justify-between mt-6 text-center">

        <div class="flex text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M9.33333 10.4998H18.6667M9.33333 15.1665H16.3333M10.5 20.9998H7C6.07174 20.9998 5.1815 20.6311 4.52513 19.9747C3.86875 19.3183 3.5 18.4281 3.5 17.4998V8.1665C3.5 7.23825 3.86875 6.34801 4.52513 5.69163C5.1815 5.03525 6.07174 4.6665 7 4.6665H21C21.9283 4.6665 22.8185 5.03525 23.4749 5.69163C24.1313 6.34801 24.5 7.23825 24.5 8.1665V17.4998C24.5 18.4281 24.1313 19.3183 23.4749 19.9747C22.8185 20.6311 21.9283 20.9998 21 20.9998H17.5L14 24.4998L10.5 20.9998Z"
              stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
  
          <h2 class="  text-[#131318] ml-3 text-base">${post.comment_count}</h2>
  
          <div class="ml-5"><i class="fa-regular fa-eye text-center"></i></div>
  
          <h2 class="  text-[#131318] ml-3 text-base">${post.view_count}</h2>
  
  
          <div class="text-center ml-5">
            <i class="fa-regular fa-clock"></i>
          </div>
  
          <h2 class="  text-[#131318] ml-3 text-base">${post.posted_time} min</h2>
  
  
        </div>
  
  
        <div class="mt-10 lg:mt-0 ">
          <button  onclick="btnClick('${post.title.replace('\'', '')}',${post.view_count})" >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <g clip-path="url(#clip0_19_556)">
                <path
                  d="M13.9997 0C6.26796 0 0 6.26814 0 13.9999C0 21.7314 6.26796 28 13.9997 28C21.7314 28 27.9998 21.7314 27.9998 13.9999C27.9998 6.26814 21.7314 0 13.9997 0ZM14 4.91741L22.2846 10.0835H5.71532L14 4.91741ZM22.3878 18.333H22.387C22.387 19.1616 21.7154 19.8331 20.8869 19.8331H7.113C6.28438 19.8331 5.61294 19.1615 5.61294 18.333V10.4122C5.61294 10.3245 5.6219 10.2393 5.63646 10.1556L13.5519 15.0914C13.5617 15.0975 13.572 15.1016 13.582 15.1072C13.5925 15.113 13.6031 15.1186 13.6137 15.1239C13.6696 15.1527 13.7272 15.176 13.7861 15.1912C13.7922 15.1929 13.7983 15.1936 13.8043 15.195C13.8689 15.2102 13.9343 15.2197 13.9997 15.2197H14.0001C14.0006 15.2197 14.0011 15.2197 14.0011 15.2197C14.0664 15.2197 14.1318 15.2105 14.1964 15.195C14.2025 15.1935 14.2086 15.1929 14.2146 15.1912C14.2734 15.176 14.3308 15.1527 14.387 15.1239C14.3976 15.1186 14.4083 15.113 14.4187 15.1072C14.4286 15.1016 14.4391 15.0975 14.4488 15.0914L22.3643 10.1556C22.3788 10.2393 22.3878 10.3244 22.3878 10.4122V18.333Z"
                  fill="#10B981" />
              </g>
              <defs>
                <clipPath id="clip0_19_556">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg></button>
        </div>
  
  
  
  
      </div>
  
  
    </div>


    
    `;












    cardDiv.appendChild(createDiv);







  })




}



// All Latest post Data Function

const latestPostData = (latestPosts) => {

  const latestCard = document.getElementById('latest-card');

  latestPosts.forEach(latestPost => {
    // console.log(latestPost);


    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `

    <div class="card  container mx-auto  bg-slate-300 shadow-xl ">
    <figure class="px-10 pt-10">
      <img src="${latestPost.cover_image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body">

      <div class="flex  text-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_19_819)">
            <path
              d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
              stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M16 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M8 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M4 11H20" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z"
              stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_19_819">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="ml-1 text-[#12132D] opacity-70">${latestPost.author?.posted_date || 'No publish date'}</p>
      </div>

      <h2 class="Mulish text-[18px] mt-4 text-[#12132D] font-extrabold">${latestPost.title}</h2>
      <p class="ml-1 text-[#12132D] opacity-80">${latestPost.description}</p>


      <div class="flex mt-4">
        <div>

        <img class = "w-[44px] h-[44px]  rounded-full" src="${latestPost.profile_image}" alt="">

        </div>
        <div class="ml-4">
          <h5 class="Mulish text-base font-bold ">${latestPost.author.name}</h5>
          <p class="ml-1 text-[#12132D] opacity-70">${latestPost.author.designation || "Unknown"}</p>
        </div>
      </div>

    </div>
  </div>

    `;

    latestCard.appendChild(cardDiv);


  })



}


// All Post Search


const singlePostSearch = () => {
  // console.log("search")

  const searchInput = document.getElementById('input-id');
  const searchText = searchInput.value;
  // console.log(searchValue)
  postSearchData(searchText);


}



// Loading Spinner
const handleSpinner = (status) => {

  setTimeout(() => {
    document.getElementById("loading-spiner").style.display = status;
  }, 2000);

};


// Btn Click Count & Show Left Side
let count = 0;

const btnClick = (title,view_count) => {
  // console.log(title, view_count)

  count++;

  document.getElementById('count').innerText = count;

  // console.log(count)

  // console.log(count)

  const leftSide = document.getElementById('left-side');

  const createDivLeftSide = document.createElement('div');


  createDivLeftSide.innerHTML = `
    <div class="flex justify-between bg-[#fff] p-6 rounded-3xl mt-7   text-base font-medium">
    <h1 class="w-3/4">${title}</h1>
    <div class="ml-5"><i class="fa-regular fa-eye text-center"></i></div>
  
    <h2 class="text-[#131318] ml-3 text-base">${view_count}</h2>
    </div>
  
    `;

  leftSide.appendChild(createDivLeftSide)



}



loadAllLatestPost()
loadAllData()

