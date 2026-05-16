const products = [
  {slug:'baseball', name:'Baseball', icon:'⚾', category:'field', desc:'For pitchers, catchers, infielders, and outfielders.'},
  {slug:'softball', name:'Softball', icon:'🥎', category:'field', desc:'Perfect for softball rosters and tournament keepsakes.'},
  {slug:'football', name:'Football', icon:'🏈', category:'field', desc:'Works for offense, defense, special teams, and youth football.'},
  {slug:'basketball', name:'Basketball', icon:'🏀', category:'court', desc:'Guard, forward, center, rec league, school, and AAU style.'},
  {slug:'soccer', name:'Soccer', icon:'⚽', category:'field', desc:'Forward, midfield, defense, and goalie card template.'},
  {slug:'hockey', name:'Hockey', icon:'🏒', category:'winter', desc:'Skater and goalie friendly card layout.'},
  {slug:'lacrosse', name:'Lacrosse', icon:'🥍', category:'field', desc:'Great for attack, midfield, defense, and goalie stats.'},
  {slug:'volleyball', name:'Volleyball', icon:'🏐', category:'court', desc:'Setter, libero, hitter, middle, and serving stat layout.'},
  {slug:'track', name:'Track & Field', icon:'🏃', category:'individual', desc:'Running, jumping, throwing, and event bests.'},
  {slug:'cross-country', name:'Cross Country', icon:'👟', category:'individual', desc:'Best times, course memories, goals, and meet highlights.'},
  {slug:'wrestling', name:'Wrestling', icon:'🤼', category:'individual', desc:'Weight class, wins, pins, takedowns, and favorite move.'},
  {slug:'cheer', name:'Cheerleading', icon:'★', category:'school', desc:'Base, flyer, back spot, tumbler, competitions, and team spirit.'},
  {slug:'dance', name:'Dance Team', icon:'✦', category:'school', desc:'Dance style, routine, performances, and competition highlights.'},
  {slug:'golf', name:'Golf', icon:'⛳', category:'individual', desc:'Best round, average score, favorite club, and tournament finish.'},
  {slug:'tennis', name:'Tennis', icon:'🎾', category:'court', desc:'Singles, doubles, aces, wins, and favorite shot.'},
  {slug:'swimming', name:'Swimming', icon:'🏊', category:'individual', desc:'Stroke, event times, relays, and personal bests.'},
];

const grid = document.getElementById('productGrid');
const search = document.getElementById('search');
const category = document.getElementById('category');

function renderProducts(){
  const q = search.value.trim().toLowerCase();
  const cat = category.value;
  grid.innerHTML = '';
  products.filter(p => (cat === 'all' || p.category === cat) && (!q || `${p.name} ${p.desc}`.toLowerCase().includes(q)))
    .forEach(p => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <span class="tag">Blank template</span>
        <div class="product-preview" aria-hidden="true">${p.icon}</div>
        <h3>${p.name} Card Template</h3>
        <p>${p.desc}</p>
        <div class="download-row">
          <a href="assets/templates/${p.slug}-front.svg" download>Front SVG</a>
          <a href="assets/templates/${p.slug}-back.svg" download>Back SVG</a>
        </div>
      `;
      grid.appendChild(card);
    });
}

search.addEventListener('input', renderProducts);
category.addEventListener('change', renderProducts);
renderProducts();

const form = document.getElementById('orderForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const saved = JSON.parse(localStorage.getItem('rosterCardRequests') || '[]');
  saved.push({...data, createdAt: new Date().toISOString()});
  localStorage.setItem('rosterCardRequests', JSON.stringify(saved));
  form.reset();
  formMessage.textContent = 'Request saved in this browser. Connect the form to your checkout/backend before going live.';
});
