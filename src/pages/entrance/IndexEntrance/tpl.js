const tpl = `
        <h2 class="entrance__header">{{title}}</h2>
        <form class="entrance__form">
            <label class="labelEntrance" for="text" >{{description1}}</label>
            <input class="entrance__input" required type="text" id="text" name="login">
            <label class="labelEntrance" for="password" >{{description2}}</label>
            <input class="entrance__input" required type="password" id="password" name="password">
            {{{button}}}
        </form>
        {{{link}}}
`;

export default tpl;
