const tpl: string = `
    <div class='form__content'>
        <label class='label' for='email'>Почта</label>
        <div class="input__span">
            {{{input4}}}
            <span class='error__ChangeData' id='emailError'></span>
        </div>
    </div>
    <div class='form__content'>
        <label class='label' for='login'>Логин</label>
        <div class="input__span">
            {{{input3}}}
            <span class='error__ChangeData' id="loginError"></span>
        </div>
    </div>
    <div class='form__content'>
        <label class='label' for="first_name">Имя</label>
        <div class="input__span">
            {{{input0}}}
            <span class='error__ChangeData' id='firstNameError'></span>
        </div>
    </div>
    <div class='form__content'>
        <label class='label' for='second_name'>Фамилия</label>
        <div class="input__span">
            {{{input1}}}
            <span class='error__ChangeData' id='secondNameError'></span>
        </div>
    </div>
    <div class='form__content'>
        <label class='label' for='display_name'>Имя в чате</label>
        <div class="input__span">
            {{{input2}}}
            <span class='error__ChangeData' id="Name__chat"></span>
        </div>
    </div>
    <div class='form__content'>
        <label class='label' for='tel'>Телефон</label>
        <div class="input__span">
            {{{input5}}}
            <span class='error__ChangeData' id='phoneError'></span>
        </div>
    </div>
    <span class="ErrorRequest" id="ErrorRequest"></span>
    {{{button}}}
`;

export default tpl;
