const tpl: string = `
    <img id="avatar" src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" alt="Добавьте картинку" class="avatar__image" onerror="this.onerror=null; this.src='../../image/avatar.svg';" />
    <div class="name">{{first_name}}</div>
    <div class="section">
        <div class='label'>{{labelEmail}}</div>
        <div class='description'>{{email}}</div>
    </div>
    <div class="section">
        <div class='label'>{{labelLogin}}</div>
        <div class='description'>{{login}}</div>
    </div>
    <div class="section">
        <div class='label'>{{labelFirstName}}</div>
        <div class='description'>{{first_name}}</div>
    </div>
    <div class="section">
        <div class='label'>{{labelSecondName}}</div>
        <div class='description'>{{second_name}}</div>
    </div>
    <div class="section">
        <div class='label'>{{labelDisplayName}}</div>
        <div class='description'>{{display_name}}</div>
    </div>
    <div class="section">
        <div class='label'>{{labelPhone}}</div>
        <div class='description'>{{phone}}</div>
    </div>
`;

export default tpl;
