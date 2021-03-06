import React from 'react';
import './Aboutcss.css';
import Header from "../../components/Header/header";
import photo from "./../../img/aboutMePhoto.jpg";

export default function About() {
    return (
        <>
       <Header img={photo} headerTitle={"About me"} headerSubtitle={"I am lorem ipsum"}/>
        <div className={"about-wrapper"}>
            <h1>My name. Is. Jeff.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sem vitae turpis faucibus commodo nec in lorem. Duis pellentesque leo sit amet cursus iaculis. Ut eget congue magna. Sed luctus nisi et eros gravida, sit amet auctor massa placerat. Ut gravida et neque malesuada lobortis. Ut porttitor egestas lorem ultrices tempus. Maecenas non bibendum nulla. Proin semper lacus vel ligula interdum, et convallis enim accumsan. Nullam porta leo non libero ornare, ac gravida risus finibus. Nullam venenatis nec sem facilisis tincidunt. Vestibulum egestas consequat eros vitae facilisis. Praesent in bibendum dui, vitae imperdiet sapien.</p>
            <p>Maecenas placerat, libero a suscipit efficitur, metus nulla gravida nunc, pretium eleifend mi mauris ac erat. Etiam volutpat finibus eros, ut consequat enim tristique vitae. Nullam faucibus pellentesque metus quis iaculis. Integer ultrices urna tempus libero ultricies mollis. Cras aliquet mi eu libero dictum, et fermentum orci eleifend. Etiam suscipit turpis ut tincidunt accumsan. Nam euismod facilisis ex, suscipit pulvinar eros commodo at. In efficitur magna lorem, vitae dictum ante sollicitudin eget. Integer tincidunt ligula ut turpis rutrum blandit. Maecenas commodo egestas nisi vel mollis. Suspendisse blandit libero ligula, ut mollis diam ultrices id. Vestibulum rutrum nisi in sapien vestibulum lobortis. Quisque varius porta felis at lacinia.</p>
            <p>Aliquam erat volutpat. Etiam eget dignissim est. Aenean et scelerisque sapien, id facilisis odio. Donec eros elit, hendrerit viverra faucibus vel, dapibus porttitor eros. Nullam ut posuere orci. Nam quis urna tempor, cursus nulla id, lacinia eros. Aliquam bibendum risus metus, eu vestibulum lectus dapibus et. Integer rhoncus neque vitae odio accumsan, sit amet sollicitudin est porta. Mauris enim est, dictum pretium pretium nec, fringilla quis nunc.</p>
            <p>In malesuada augue eget eleifend sagittis. Proin nec pretium ex, ut pellentesque odio. Vestibulum leo orci, faucibus vel nulla non, vehicula elementum mi. Praesent sit amet semper justo. Mauris in vestibulum quam. Phasellus in molestie dui. Integer eros lacus, sodales at molestie vel, volutpat sollicitudin nibh. Donec eget aliquam massa, non aliquam dui. Duis nulla erat, pulvinar nec posuere accumsan, sodales rhoncus ipsum. Phasellus egestas urna in risus bibendum placerat. Morbi euismod blandit semper.</p>
        </div>
        </>
    );
}