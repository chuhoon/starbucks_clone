const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// Input 요소에 포커스 적용
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// focus가 되면 focused라는 것을 classList에 추가하겠다.
// 속성 설정 1) 속성 이름 : placeholder 2) 속성 : 통합검색
searchEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021