const tpl: string = `
<ul>
{{#each items}}
    <li><a href="{{ url }}">{{title}}</a></li>
{{/each}}
</ul>
`;

export default tpl;
