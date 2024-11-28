const tpl: string = `
    {{avatar}}
    <div class="container__name">
        <h3 class="message__name">{{title}}</h3>
        <p class="message">{{last_message}}</p>
    </div>
    <div class="container__time">
        <p class="time">{{time}}</p>
        <div class="NumberOfMessages">{{unread_count}}</div>
    </div>
`;

export default tpl;
