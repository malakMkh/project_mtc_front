import React from 'react'
import Nav from './Nav'
import Styles from './MyStyles.module.css';
const Interests = () => {
  return (
    
        <div className={Styles.menu_s}>

<div className={Styles.wrapper}>
  {/*Top menu */}
  
 <Nav/>
  {/*  profile Setting   */}
 
<div className={Styles.tab_content} id=""  >
<div className={Styles.title}> interests Settings </div>
<div className={Styles.Quetion}> What are you interested in ? </div>
<section className={Styles.radio_section}>

  <div className={Styles.radio_list}>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio1"  />
      <label className={Styles.label} htmlFor="radio1">Accounting </label>
    </div>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio2" />
      <label className={Styles.label} htmlFor="radio2"> design</label>
    </div>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio3" />
      <label className={Styles.label} htmlFor="radio3"> consulting</label>
    </div>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio4" />
      <label className={Styles.label} htmlFor="radio4"> sports</label>
    </div>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio5" />
      <label className={Styles.label} htmlFor="radio5"> Web </label>
    </div>
  </div>
  <div className={Styles.radio_list}>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio6" />
      <label className={Styles.label} htmlFor="radio6"> financial</label>
    </div>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio7" />
      <label className={Styles.label} htmlFor="radio7">Music </label>
    </div>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio8" />
      <label className={Styles.label} htmlFor="radio8"> Gaming</label>
    </div>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio9" />
      <label className={Styles.label} htmlFor="radio9">Tech </label>
    </div>
    <div className={Styles.radio_item}>
      <input className={Styles.input} type="radio" name="radio" id="radio10" />
      <label className={Styles.label} htmlFor="radio10">Other</label>
    </div>
  </div>
</section>

<div className={Styles.radio_button}>
    <input className={Styles.input}  type="button" value="Submit"  /> 
  
  
  </div>
</div>
    </div>
    </div>
  )
}

export default Interests