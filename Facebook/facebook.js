//mega menu active
var megaMenu = document.querySelectorAll('.mega__menu--litem');
Array.from(megaMenu).forEach((element) => {
    element.onclick = () => {
        Array.from(megaMenu).forEach((element) => {
            element.classList.remove('active');
        });
        element.classList.add('active');
    }
});

//handmade scroll meeting room
var meetingBox = document.querySelector('.slide__room');
var leftMeeting = document.querySelector('.invite__all .fa-chevron-left');
var rightMeeting = document.querySelector('.invite__all .fa-chevron-right');
var stepLenght = 100;
rightMeeting.onclick = () => {
    stepLenght = stepLenght + 200;
    meetingBox.scroll(stepLenght, 0);
    leftMeeting.style.display = 'block';
}
leftMeeting.onclick = () => {
    stepLenght = stepLenght - 200;
    meetingBox.scroll(stepLenght, 0);
    if(stepLenght <= 0) {
        leftMeeting.style.display = 'none';
    }
}

//search Fb event
var logoGroup = document.querySelector('.logo-group');
var searchFb = document.querySelector('.search');
var searchInputFb = document.querySelector('.search input');
var searchInputFbIcon = document.querySelector('.search i');
var backLogo = document.querySelector('.back__logo i');
var divBackLogo = document.querySelector('.back__logo');
document.addEventListener('click', (evt) => {
    let target = evt.target;
    if(target == searchFb || target == searchInputFb || target == searchInputFbIcon) {
        logoGroup.classList.add('search__on');
    } else if(target == backLogo || target == divBackLogo || !(target==document) ){
        logoGroup.classList.remove('search__on');
    }
});

// menu toggle
var nav = document.querySelector('.nav');
var toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => nav.classList.toggle('open'));

// hidden menu item
var menuItem = document.getElementsByClassName('menu__item');
let menuArray = [...menuItem];

window.addEventListener('load', () => {
    for(let i = 0; i < menuArray.length - 1; i++) {
        if(i < 7) {
            menuArray[i].style.display = 'block';
        } else {
            menuArray[i].style.display = 'none';
        }
    }
});

// show menu item
menuArray[menuArray.length - 1].addEventListener('click', () => {
    for(let i = 7; i < menuArray.length - 1; i++) {
        if(menuArray[i].style.display == 'none') {
            menuArray[i].style.display = 'block';
        } else {
            menuArray[i].style.display = 'none';
        }
    }

    menuArray[menuArray.length - 1].classList.toggle('hidden');
});

// multiple menu
var multiple = document.querySelectorAll('.multiple__item');
let multipleArray = [...multiple];

var lastClick = {};
multipleArray.forEach((element, index) => {
    element.addEventListener('click', () => {
        if(lastClick === element) {
            element.classList.toggle('hidden__card');
            lastClick = element;
        } else {
            multipleArray.forEach((element, index) => {
                if(document.querySelector('.multiple__item').className.search('hidden__card')) {
                    element.classList.remove('hidden__card');
                }
            });
            element.classList.toggle('hidden__card');
            lastClick = element;
        }
    });
});

//stopPropagation
var multipleCard = document.querySelectorAll('.multiple__card');
for(let i = 0; i < multipleCard.length; i++) {
    multipleCard[i].onclick = (e) => e.stopPropagation();
}

var checkReadNotification = document.querySelectorAll('.new__extend');
for(let i = 0; i < checkReadNotification.length; i++) {
    checkReadNotification[i].onclick = (e) => e.stopPropagation();
}

var checkBoxNotification = document.querySelectorAll('.check__opbox');
for(let i = 0; i < checkBoxNotification.length; i++) {
    checkBoxNotification[i].onclick = (e) => e.stopPropagation();
}

//Ring display
var ringDot = document.querySelector('.more__ring');
var ringNav = document.querySelector('.ring__card--nav');

ringDot.onclick = () => ringNav.classList.toggle('clicked__op');

//none Read
var ringRead = document.querySelectorAll('.news__item');

ringRead.forEach(element => {
    var miniBoxRead = element.querySelector('.new__extend');
    miniBoxRead.addEventListener('click', () => {
        var BoxRead = element.querySelector('.check__opbox');
        if(BoxRead.style.display == 'block') {
            BoxRead.style.display = 'none';
        } else {
            BoxRead.style.display = 'block';
        }
    })
});

//none Mess
var messRead = document.querySelectorAll('.messenger__item');

messRead.forEach(element => {
    var minimessRead = element.querySelector('.new__extend');
    minimessRead.addEventListener('click', () => {
        var msRead = element.querySelector('.check__opbox');
        if(msRead.style.display == 'block') {
            msRead.style.display = 'none';
        } else {
            msRead.style.display = 'block';
        }
    })
});

// display counter notification
function NumberNotification(numNotification) {
    var numNotifiArr = [...numNotification];
    numNotifiArr.forEach(element => {
        if(element.innerHTML > 9){
            var singleNum = element.innerHTML.split('');
            var [first, ...rest] = singleNum;
            element.innerHTML = `${first}+`;
        }
    });
}


// process notification
var allNotification = document.querySelectorAll('.news__item');
var numNotification = document.querySelectorAll('.ontop__icon--counter');
console.log(allNotification, numNotification);

function CounterNotification(allNotification, counter) {
    allNotification.forEach(element => {
        var miniround = element.querySelector('.miniround');
        var boxSeen = element.querySelector('.check__opbox');
        if(miniround.style.display !== 'none') {
            boxSeen.classList.remove('have__seen');
            counter++;
        } else {
            boxSeen.classList.add('have__seen');
        }
    });
    var notificationRing = document.querySelector('.notification__ring');
    notificationRing.innerHTML = counter;
}

window.onload = () => {
    var counter = 0;
    CounterNotification(allNotification, counter);
    NumberNotification(numNotification);
}

allNotification.forEach(element => {
    element.onclick = () => {
        var miniround = element.querySelector('.miniround');
        var times = element.querySelector('.news__times');
        var notificationtxt = element.querySelector('.news__content');
        miniround.style.display = 'none';
        notificationtxt.style.color = '#65676b';
        times.style.color = '#65676b';
        
        var counter = 0;
        CounterNotification(allNotification, counter);
    }
});

//hidden opbox after check click
var checkReadSingleCard = document.querySelectorAll('.check__opbox--read');
checkReadSingleCard.forEach(element => {
    element.onclick = () => {
        element.parentElement.style.display = 'none';
    }
})

// check have not seen notification ring in mini open box
// function SeenOrNot(allNotification) {
    allNotification.forEach(element => {
        var miniround = element.querySelector('.miniround');
        var boxSeen = element.querySelector('.check__opbox');
        var checkSeen = boxSeen.querySelector('.check__hseen');
        var checkNotSeen = boxSeen.querySelector('.check__nseen');

        boxSeen.addEventListener('click', () => {
            if(boxSeen.classList.contains('have__seen')) {

                boxSeen.classList.remove('have__seen');

                var miniround = element.querySelector('.miniround');
                var times = element.querySelector('.news__times');
                var notificationtxt = element.querySelector('.news__content');
                miniround.style.display = 'block';
                notificationtxt.style.color = 'var(--main-font-color)';
                times.style.color = 'var(--special-color)';
                
                var counter = 0;
                CounterNotification(allNotification, counter);

            } else {

                boxSeen.classList.add('have__seen');

                var miniround = element.querySelector('.miniround');
                var times = element.querySelector('.news__times');
                var notificationtxt = element.querySelector('.news__content');
                miniround.style.display = 'none';
                notificationtxt.style.color = '#65676b';
                times.style.color = '#65676b';
                
                var counter = 0;
                CounterNotification(allNotification, counter);
                
            }
        });
    });

//check seen all notification
var seenAllNotiRing = document.querySelector('.utilities__read');
seenAllNotiRing.onclick  = () => {
    var boxSeen = document.querySelectorAll('.check__opbox');
    boxSeen.forEach(element => {
        element.classList.add('have__seen');
        allNotification.forEach(element => {
            var miniround = element.querySelector('.miniround');
            var times = element.querySelector('.news__times');
            var notificationtxt = element.querySelector('.news__content');
            miniround.style.display = 'none';
            notificationtxt.style.color = '#65676b';
            times.style.color = '#65676b';
                
            var counter = 0;
            CounterNotification(allNotification, counter);
        });
    });

    ringNav.classList.toggle('clicked__op');
}

//Messenger User
import User from './messuser.js';

var allMess = document.querySelectorAll('.messenger__item');
var allUser = Array.from(allMess).reduce((accumulator, element, index) => {
    var userObject = new User(
        element,
        element.querySelector('.mess__user--name').innerHTML,
        (element.querySelector('.mess_online').style.display == 'block'),
        element.querySelector('.what__times').innerHTML
    );

    accumulator.push(userObject); 
    return accumulator;
}, []);

console.log(allUser);

Array.from(allMess).forEach((element) => {
    element.addEventListener('click', () => {
        //Lấy create một box với class nào đó
        //set các thứ như html
        //Cái chính là đưa dữ liệu của đối tượng vào nó. giờ thì chỉ cần in đối tương/dữ liệu của thằng vừa click ra thôi
        var currentUser = allUser.find((Userelement) => {
            return Userelement.id === element;
        });
        console.log(currentUser);
    });
});

//seen messenger

Array.from(allMess).forEach((element) => {
    element.addEventListener('click', () => {
        var messNotification = element.querySelector('.miniround');
        var messText = element.querySelector('.mess__user--content');
        var messName = element.querySelector('.mess__user--name');
        var checkopBoxMess = element.querySelector('.check__opbox');
        if(messNotification.style.display !== 'none') {
            messNotification.style.display = 'none';
            messText.style.color = 'rgb(101, 103, 107)';
            messName.style.color = 'rgb(101, 103, 107)';
            checkopBoxMess.classList.toggle('have__seen');
        }
    });
});

var MessopBox = document.querySelectorAll('.messenger__item .check__opbox');
console.log(MessopBox);
Array.from(MessopBox).forEach((element, index) => {
    var messNotification = allMess[index].querySelector('.miniround');
    var messText = allMess[index].querySelector('.mess__user--content');
    var messName = allMess[index].querySelector('.mess__user--name');
    var checkRead = element.querySelector('.check__opbox--read');
    checkRead.onclick = () => {
        if(messNotification.style.display !== 'none') {
            messNotification.style.display = 'none';
            messText.style.color = 'rgb(101, 103, 107)';
            messName.style.color = 'rgb(101, 103, 107)';
            element.classList.toggle('have__seen');
        } else {
            messNotification.style.display = 'block';
            messText.style.color = 'var(--special-color)';
            messName.style.color = 'var(--main-font-color)';
            element.classList.toggle('have__seen');
        }

        element.style.display = 'none';
    }
});

// Open mess box
