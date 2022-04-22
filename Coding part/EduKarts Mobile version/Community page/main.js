const post_ml = document.querySelector('.ml');
const createPost = document.querySelector('.create-post');
const postBtn = document.querySelector('.post-btn')
const postSearch = document.querySelector('.post-search');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const postSub = document.querySelector('.post-sub');
const postSubTitle = document.querySelector('.post-subject-title');
const postSubDesc = document.querySelector('.post-subject-description');
const veiwClass = document.querySelector('.veiw-class')

const openModal = function(){
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function(){
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
 // postContainer.insertAdjacentHTML('beforeend', html)
 post_ml.insertAdjacentHTML('beforeend', `
               <div class="post">
                 <h3>User name</h3>
                 <br>
                 <h4>${postSubTitle.value}</h4>
                 <br>
                 <p>${postSubDesc.value}</p>
                 <br>
                 <div class="btn__action">
                 <button class="btn btn_like">LIKE</button>
                 <button class="btn btn_dislike">DISLIKE</button>
                 <button class="btn btn_reply">REPLY</button>
                 </div>
                </div>
                `)
  //veiwClass.scrollIntoView(true)
}

createPost.addEventListener('click', openModal)
postBtn.addEventListener('click', closeModal)

///Buttons functionality///
const likeBtn = document.querySelectorAll('.btn_like')
const disLikeBtn = document.querySelectorAll('.btn_disLike')
const replyBtn = document.querySelectorAll('.btn_reply')

let likeCount = 0;
likeBtn.forEach((likeBtn) => (likeBtn.addEventListener('click', function(){
  likeCount += 1;
  this.textContent = `LIKE ${likeCount}`
})))

///Slider///
const posts = document.querySelectorAll('.posts')
const webDev = document.querySelector('.web_dev_link')
const ml = document.querySelector('.ml_link')
const appDev = document.querySelector('.app_dev_link')
const ethicalHack = document.querySelector('.ethical_hacking_link')
const postSection = document.querySelector('.post-section')


let goToSlide = 0;

const nextSlide = function(){
  goToSlide = this.dataset.btn
  posts.forEach((posts, i) => (posts.style.transform = `translateX(${100 * (i - goToSlide)}%)`))
}

posts.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`))

webDev.addEventListener('click', nextSlide)
ml.addEventListener('click', nextSlide)
appDev.addEventListener('click', nextSlide)
ethicalHack.addEventListener('click', nextSlide)
