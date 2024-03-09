const setActiveNavDot = function setActiveNavDot(index) {
    document
        .querySelector('.active-nav-dot')
        .classList.remove('active-nav-dot');
    const newActiveNavDot = document.querySelector(`[data-index="${index}"]`);
    newActiveNavDot.classList.add('active-nav-dot');
};

export default setActiveNavDot;
