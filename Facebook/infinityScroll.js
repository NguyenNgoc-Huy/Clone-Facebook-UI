const Newfeed = document.querySelector('.fb__body');
const URL = 'https://picsum.photos/';

var loading = document.createElement('div');
loading.classList.add('spiner');
loading.innerHTML = "<div></div><div></div>"


function RandImgNum(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function loadImages(numImages = 3) {
    let i = 0;
    while(i < numImages) {
        if(document.querySelector('.spiner')){
            document.querySelector('.spiner').remove();
        }
        var newComponent = document.createElement('div');
        newComponent.classList.add('post__component');
        newComponent.innerHTML = `
        <div class="post__component--head">
            <div class="name__time--ava">
                <a href="#">
                    <img src="image/ava.jpg" alt="something">
                </a>
                <div class="name__time">
                    <a href="#" class="names__post">Nguyễn Ngọc Huy</a>
                    <p class="time__post">
                        <a href="#">2 giờ</a>
                        <span class="timepost__dots">·</span>
                        <i class="fas fa-globe-americas"></i>
                    </p>
                </div>
            </div>
            <div class="post__component--edit">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
        <div class="post__component--caps">
            Lorem ipsum dolor sit amet consectetur,
        </div>
        <div class="post__component--img">
            <img src="${URL}${RandImgNum(500,1000)}" alt="something">
        </div>
        <div class="post__component--emoji">
            <div class="component__emoji">
                <div class="post__allemoji">
                    <i class="fa fa-thumbs-up"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-laugh-squint"></i>
                </div>
                <span class="component__emoji--count">500</span>
            </div>
            <div class="com__share--block">
                <div class="component__comment">50 bình luận</div>
                <div class="component__share">5 lượt chia sẻ</div>
            </div>
        </div>
        <div class="post__component--line"></div>
        <div class="post__component--active">
            <div class="like__active"><i class="fa fa-thumbs-up"></i> Thích</div>
            <div class="comment__active"><i class="fa fa-comment-alt"></i> Bình luận</div>
            <div class="share__active"><i class="fa fa-share"></i> Chia sẻ</div>
        </div>`
        Newfeed.appendChild(newComponent);
        i++;
    }
}

var lastScroll = 0;
window.addEventListener('scroll', () => {
    if(lastScroll < window.pageYOffset){
        console.log(window.scrollY + window.innerHeight, document.documentElement.scrollHeight)
        Newfeed.appendChild(loading);
        if( window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
            loading.style.display = 'block';
            setTimeout('loadImages()', 2500);
        }
    }

    lastScroll = window.pageYOffset;
}); 