/*const register=() =>{
    console.log(5*5);
};
register();
document.getElementById("title").innerHTML="<h1> Registration</h1>"*/
const show = () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const number = document.getElementById("number").value;
    let gender = "";
    const genders = document.getElementsByName("gender");
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
            break;
        }
    }
    let qualifications = [];
    const qualify = document.getElementsByClassName("qualification");
    for (let i = 0; i < qualify.length; i++) {
        if (qualify[i].checked) {
            qualifications.push(qualify[i].value);
        }
    }
    const dob = document.getElementById("date").value;
    const image = document.getElementById("image").files[0];
    let imageHTML = "No image selected";
    if (image) {
        const imageURL = URL.createObjectURL(image);
        imageHTML = `<img src="${imageURL}" alt="Uploaded Image" width="200" height="200">`;
    }
    document.getElementById("result").innerHTML = `
        <h2>Details</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${password}</p>
        <p><b>Phone Number:</b> ${number}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Qualifications:</b> ${qualifications.join(", ")}</p>
        <p><b>DOB:</b> ${dob}</p>
        <p><b>Image:</b></p>
        ${imageHTML}
    `;
};