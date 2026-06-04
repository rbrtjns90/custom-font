// <mankup-text> custom element
// Usage: <mankup-text text="Hello World!" scale="0.8"></mankup-text>
// Supports upper + lowercase, digits, and punctuation.

(function () {
  const SPRITE = 'mankup-sprite.png';
  const CELL_H = 106;
  const GLYPHS = {"!":{"x":2,"y":0,"w":96,"h":106},"#":{"x":100,"y":0,"w":97,"h":106},"$":{"x":199,"y":0,"w":97,"h":106},"%":{"x":298,"y":0,"w":100,"h":106},"&":{"x":400,"y":0,"w":99,"h":106},"'":{"x":501,"y":0,"w":62,"h":106},"(":{"x":565,"y":0,"w":100,"h":106},")":{"x":667,"y":0,"w":91,"h":106},"*":{"x":760,"y":0,"w":98,"h":106},"+":{"x":860,"y":0,"w":85,"h":106},",":{"x":947,"y":0,"w":90,"h":106},"-":{"x":1039,"y":0,"w":83,"h":106},".":{"x":1124,"y":0,"w":64,"h":106},"/":{"x":1190,"y":0,"w":77,"h":106},"0":{"x":1269,"y":0,"w":96,"h":106},"1":{"x":1367,"y":0,"w":97,"h":106},"2":{"x":1466,"y":0,"w":97,"h":106},"3":{"x":1565,"y":0,"w":97,"h":106},"4":{"x":1664,"y":0,"w":97,"h":106},"5":{"x":1763,"y":0,"w":100,"h":106},"6":{"x":1865,"y":0,"w":98,"h":106},"7":{"x":1965,"y":0,"w":99,"h":106},"8":{"x":2066,"y":0,"w":98,"h":106},"9":{"x":2166,"y":0,"w":101,"h":106},":":{"x":2269,"y":0,"w":83,"h":106},";":{"x":2354,"y":0,"w":84,"h":106},"<":{"x":2440,"y":0,"w":73,"h":106},"=":{"x":2515,"y":0,"w":83,"h":106},">":{"x":2600,"y":0,"w":73,"h":106},"?":{"x":2675,"y":0,"w":83,"h":106},"@":{"x":2760,"y":0,"w":97,"h":106},"A":{"x":2859,"y":0,"w":96,"h":106},"B":{"x":2957,"y":0,"w":97,"h":106},"C":{"x":3056,"y":0,"w":97,"h":106},"D":{"x":3155,"y":0,"w":97,"h":106},"E":{"x":3254,"y":0,"w":97,"h":106},"F":{"x":3353,"y":0,"w":100,"h":106},"G":{"x":3455,"y":0,"w":98,"h":106},"H":{"x":3555,"y":0,"w":99,"h":106},"I":{"x":3656,"y":0,"w":98,"h":106},"J":{"x":3756,"y":0,"w":101,"h":106},"K":{"x":3859,"y":0,"w":106,"h":106},"L":{"x":3967,"y":0,"w":102,"h":106},"M":{"x":4071,"y":0,"w":102,"h":106},"N":{"x":4175,"y":0,"w":96,"h":106},"O":{"x":4273,"y":0,"w":97,"h":106},"P":{"x":4372,"y":0,"w":97,"h":106},"Q":{"x":4471,"y":0,"w":97,"h":106},"R":{"x":4570,"y":0,"w":97,"h":106},"S":{"x":4669,"y":0,"w":100,"h":106},"T":{"x":4771,"y":0,"w":98,"h":106},"U":{"x":4871,"y":0,"w":99,"h":106},"V":{"x":4972,"y":0,"w":98,"h":106},"W":{"x":5072,"y":0,"w":101,"h":106},"X":{"x":5175,"y":0,"w":106,"h":106},"Y":{"x":5283,"y":0,"w":102,"h":106},"Z":{"x":5387,"y":0,"w":102,"h":106},"[":{"x":5491,"y":0,"w":96,"h":106},"\\":{"x":5589,"y":0,"w":85,"h":106},"]":{"x":5676,"y":0,"w":97,"h":106},"^":{"x":5775,"y":0,"w":98,"h":106},"_":{"x":5875,"y":0,"w":85,"h":106},"a":{"x":5962,"y":0,"w":96,"h":106},"b":{"x":6060,"y":0,"w":97,"h":106},"c":{"x":6159,"y":0,"w":97,"h":106},"d":{"x":6258,"y":0,"w":97,"h":106},"e":{"x":6357,"y":0,"w":97,"h":106},"f":{"x":6456,"y":0,"w":100,"h":106},"g":{"x":6558,"y":0,"w":98,"h":106},"h":{"x":6658,"y":0,"w":99,"h":106},"i":{"x":6759,"y":0,"w":98,"h":106},"j":{"x":6859,"y":0,"w":101,"h":106},"k":{"x":6962,"y":0,"w":106,"h":106},"l":{"x":7070,"y":0,"w":102,"h":106},"m":{"x":7174,"y":0,"w":102,"h":106},"n":{"x":7278,"y":0,"w":96,"h":106},"o":{"x":7376,"y":0,"w":97,"h":106},"p":{"x":7475,"y":0,"w":97,"h":106},"q":{"x":7574,"y":0,"w":97,"h":106},"r":{"x":7673,"y":0,"w":97,"h":106},"s":{"x":7772,"y":0,"w":100,"h":106},"t":{"x":7874,"y":0,"w":98,"h":106},"u":{"x":7974,"y":0,"w":99,"h":106},"v":{"x":8075,"y":0,"w":98,"h":106},"w":{"x":8175,"y":0,"w":101,"h":106},"x":{"x":8278,"y":0,"w":106,"h":106},"y":{"x":8386,"y":0,"w":102,"h":106},"z":{"x":8490,"y":0,"w":102,"h":106},"{":{"x":8594,"y":0,"w":97,"h":106},"|":{"x":8693,"y":0,"w":86,"h":106},"}":{"x":8781,"y":0,"w":97,"h":106},"~":{"x":8880,"y":0,"w":92,"h":106},"\u00a2":{"x":8974,"y":0,"w":96,"h":106},"\u00a3":{"x":9072,"y":0,"w":97,"h":106},"\u00a5":{"x":9171,"y":0,"w":97,"h":106},"\u00a9":{"x":9270,"y":0,"w":104,"h":106},"\u00ae":{"x":9376,"y":0,"w":108,"h":106},"\u2014":{"x":9486,"y":0,"w":91,"h":106},"\u201c":{"x":9579,"y":0,"w":99,"h":106},"\u201d":{"x":9680,"y":0,"w":71,"h":106},"\u2026":{"x":9753,"y":0,"w":85,"h":106},"\u20ac":{"x":9840,"y":0,"w":97,"h":106},"\u2122":{"x":9939,"y":0,"w":99,"h":106}};

  class MankupText extends HTMLElement {
    static get observedAttributes() { return ['scale', 'text']; }
    attributeChangedCallback() { this._render(); }
    connectedCallback() {
      if (!this._originalText) this._originalText = this.textContent;
      this._render();
    }

    _render() {
      const raw   = this.getAttribute('text') || this._originalText || '';
      const scale = parseFloat(this.getAttribute('scale') || '1');

      this.setAttribute('aria-label', raw);
      this.innerHTML = '';

      const wrap = document.createElement('span');
      wrap.setAttribute('aria-hidden', 'true');
      wrap.style.cssText = 'display:inline-flex;align-items:flex-end;gap:0;flex-wrap:wrap';

      for (const ch of raw) {
        const g = GLYPHS[ch] || GLYPHS[ch.toUpperCase()] || GLYPHS[ch.toLowerCase()];
        if (g) {
          const outer = document.createElement('span');
          outer.style.cssText = [
            'display:inline-block',
            `width:${Math.round(g.w * scale)}px`,
            `height:${Math.round(CELL_H * scale)}px`,
            'overflow:hidden',
            'flex-shrink:0',
            'vertical-align:bottom',
          ].join(';');
          const inner = document.createElement('span');
          inner.style.cssText = [
            'display:inline-block',
            `width:${g.w}px`,
            `height:${CELL_H}px`,
            `background-image:url('${SPRITE}')`,
            'background-repeat:no-repeat',
            `background-position:-${g.x}px 0px`,
            'background-size:auto',
            `transform:scale(${scale})`,
            'transform-origin:top left',
          ].join(';');
          outer.appendChild(inner);
          wrap.appendChild(outer);
        } else if (ch === ' ') {
          const sp = document.createElement('span');
          sp.style.cssText = `display:inline-block;width:${Math.round(22 * scale)}px`;
          wrap.appendChild(sp);
        } else {
          const sp = document.createElement('span');
          sp.style.cssText = `font-size:${Math.round(CELL_H * scale)}px;vertical-align:bottom;color:currentColor`;
          sp.textContent = ch;
          wrap.appendChild(sp);
        }
      }

      this.appendChild(wrap);
    }
  }

  customElements.define('mankup-text', MankupText);
}());
