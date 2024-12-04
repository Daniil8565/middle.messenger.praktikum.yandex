const tpl: string = `
    <img class="chat__avatar" src="../../image/Ellipse.svg"/>
    <div class="container__name">
        <h3 class="message__name">{{title}}</h3>
    </div>
    <div class="container__time">
        <div class="NumberOfMessages">{{unread_count}}</div>
    </div>
`;

export default tpl;
