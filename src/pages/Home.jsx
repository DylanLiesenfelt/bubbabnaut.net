const Home = () => {
    
    function calcAge() {
        const today = new Date();
        const birth = new Date('10/07/1995')
    
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        const dayDiff = today.getDate() - birth.getDate();
      
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          age--;
        }
      
        return age;
    }

    const age = calcAge()

    return (
        <div id="main">
            <h3 className='section-header'>About</h3>
            <div id='link-container'>
            <a href="https://github.com/DylanLiesenfelt">GitHub</a>
            <a href="https://www.linkedin.com/in/dylanliesenfelt/">Linkedin</a>
            <a href="http://">Resume</a>
            </div>
            <p id='about-text'>
            Thanks for visiting my site!<br /><br />
            My name is Dylan Liesenfelt, and I’m a {age}-year-old Computer Science student at Florida Atlantic University (FAU) in Boca Raton, FL.<br /><br />
            I’m a U.S. Navy veteran, where I served on active duty for 8 years as an Aviation Electrician's Mate working on H-60 model helicopters. In 2022, I was honorably discharged and decided to pursue my passion for technology by furthering my education.<br /><br />
            Outside of school and coding, I enjoy working out, building stuff, and spending time with my girlfriend and our three awesome dogs.
            </p>
        </div>
    )
}

export default Home