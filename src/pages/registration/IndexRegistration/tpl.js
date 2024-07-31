const tpl = `
    <div class='registration__content'>
        <h2 class="entrance__header">{{title}}</h2>
        <form class="registration__form">
            <label class="labelRegistration" for="email" >{{description1}}</label>
            <input class="entrance__input" required type="email" id="email" name="email">

            <label class="labelRegistration" for="login" >{{description2}}</label>
            <input class="entrance__input" required type="text" id="login" name="login">

            <label class="labelRegistration" for="first_name" >{{description3}}</label>
            <input class="entrance__input" required type="text" id="first_name" name="first_name">

            <label class="labelRegistration" for="second_name" >{{description4}}</label>
            <input class="entrance__input" required type="text" id="second_name" name="second_name">

            <label class="labelRegistration" for="phone" >{{description5}}</label>
            <input class="entrance__input" required type="tel" id="phone" name="phone">

            <label class="labelRegistration" for="password" >{{description6}}</label>
            <input class="entrance__input" required type="password" id="password" name="password">

            <label class="labelRegistration" for="PasswordRepeat" >{{description7}}</label>
            <input class="entrance__input" required type="password" id="PasswordRepeat" name="password">

            {{{button}}}
        </form>
        {{{link}}}
        </div>
`;

export default tpl;
