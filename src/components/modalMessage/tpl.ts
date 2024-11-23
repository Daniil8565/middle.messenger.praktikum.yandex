const tpl: string = `
    <div class="modal-content">
        <h2>{{Header}}</h2>
        <form>
        <label for="{{for}}">Имя пользователя:</label>
        <input type="text" id="{{id}}" name="{{name}}" required />
        <button type="submit">{{buttonDescription}}</button>
        </form>
        <button class="close-modal">Закрыть</button>
    </div>
`;

export default tpl;
