// <mankup-text> custom element
// Usage: <mankup-text text="Hello World!" scale="0.8"></mankup-text>
// Supports upper + lowercase, digits, and punctuation.

(function () {
  const SPRITE = 'mankup-sprite.png';
  const CELL_H = 106;
  const GLYPHS = {"!":{"x":2,"y":0,"w":96,"h":106},"#":{"x":100,"y":0,"w":97,"h":106},"$":{"x":199,"y":0,"w":97,"h":106},"%":{"x":298,"y":0,"w":100,"h":106},"&":{"x":400,"y":0,"w":99,"h":106},"'":{"x":501,"y":0,"w":62,"h":106},"(":{"x":565,"y":0,"w":100,"h":106},")":{"x":667,"y":0,"w":91,"h":106},"*":{"x":760,"y":0,"w":98,"h":106},"+":{"x":860,"y":0,"w":85,"h":106},",":{"x":947,"y":0,"w":67,"h":106},"-":{"x":1016,"y":0,"w":83,"h":106},".":{"x":1101,"y":0,"w":64,"h":106},"/":{"x":1167,"y":0,"w":77,"h":106},"0":{"x":1246,"y":0,"w":96,"h":106},"1":{"x":1344,"y":0,"w":97,"h":106},"2":{"x":1443,"y":0,"w":97,"h":106},"3":{"x":1542,"y":0,"w":97,"h":106},"4":{"x":1641,"y":0,"w":97,"h":106},"5":{"x":1740,"y":0,"w":100,"h":106},"6":{"x":1842,"y":0,"w":98,"h":106},"7":{"x":1942,"y":0,"w":99,"h":106},"8":{"x":2043,"y":0,"w":98,"h":106},"9":{"x":2143,"y":0,"w":101,"h":106},":":{"x":2246,"y":0,"w":83,"h":106},";":{"x":2331,"y":0,"w":84,"h":106},"<":{"x":2417,"y":0,"w":73,"h":106},"=":{"x":2492,"y":0,"w":83,"h":106},">":{"x":2577,"y":0,"w":73,"h":106},"?":{"x":2652,"y":0,"w":83,"h":106},"@":{"x":2737,"y":0,"w":97,"h":106},"A":{"x":2836,"y":0,"w":96,"h":106},"B":{"x":2934,"y":0,"w":97,"h":106},"C":{"x":3033,"y":0,"w":97,"h":106},"D":{"x":3132,"y":0,"w":97,"h":106},"E":{"x":3231,"y":0,"w":97,"h":106},"F":{"x":3330,"y":0,"w":100,"h":106},"G":{"x":3432,"y":0,"w":98,"h":106},"H":{"x":3532,"y":0,"w":99,"h":106},"I":{"x":3633,"y":0,"w":98,"h":106},"J":{"x":3733,"y":0,"w":101,"h":106},"K":{"x":3836,"y":0,"w":106,"h":106},"L":{"x":3944,"y":0,"w":102,"h":106},"M":{"x":4048,"y":0,"w":102,"h":106},"N":{"x":4152,"y":0,"w":96,"h":106},"O":{"x":4250,"y":0,"w":97,"h":106},"P":{"x":4349,"y":0,"w":97,"h":106},"Q":{"x":4448,"y":0,"w":97,"h":106},"R":{"x":4547,"y":0,"w":97,"h":106},"S":{"x":4646,"y":0,"w":100,"h":106},"T":{"x":4748,"y":0,"w":98,"h":106},"U":{"x":4848,"y":0,"w":99,"h":106},"V":{"x":4949,"y":0,"w":98,"h":106},"W":{"x":5049,"y":0,"w":101,"h":106},"X":{"x":5152,"y":0,"w":106,"h":106},"Y":{"x":5260,"y":0,"w":102,"h":106},"Z":{"x":5364,"y":0,"w":102,"h":106},"[":{"x":5468,"y":0,"w":96,"h":106},"\\":{"x":5566,"y":0,"w":85,"h":106},"]":{"x":5653,"y":0,"w":97,"h":106},"^":{"x":5752,"y":0,"w":98,"h":106},"_":{"x":5852,"y":0,"w":85,"h":106},"a":{"x":5939,"y":0,"w":96,"h":106},"b":{"x":6037,"y":0,"w":97,"h":106},"c":{"x":6136,"y":0,"w":97,"h":106},"d":{"x":6235,"y":0,"w":97,"h":106},"e":{"x":6334,"y":0,"w":97,"h":106},"f":{"x":6433,"y":0,"w":100,"h":106},"g":{"x":6535,"y":0,"w":98,"h":106},"h":{"x":6635,"y":0,"w":99,"h":106},"i":{"x":6736,"y":0,"w":98,"h":106},"j":{"x":6836,"y":0,"w":101,"h":106},"k":{"x":6939,"y":0,"w":106,"h":106},"l":{"x":7047,"y":0,"w":102,"h":106},"m":{"x":7151,"y":0,"w":102,"h":106},"n":{"x":7255,"y":0,"w":96,"h":106},"o":{"x":7353,"y":0,"w":97,"h":106},"p":{"x":7452,"y":0,"w":97,"h":106},"q":{"x":7551,"y":0,"w":97,"h":106},"r":{"x":7650,"y":0,"w":97,"h":106},"s":{"x":7749,"y":0,"w":100,"h":106},"t":{"x":7851,"y":0,"w":98,"h":106},"u":{"x":7951,"y":0,"w":99,"h":106},"v":{"x":8052,"y":0,"w":98,"h":106},"w":{"x":8152,"y":0,"w":101,"h":106},"x":{"x":8255,"y":0,"w":106,"h":106},"y":{"x":8363,"y":0,"w":102,"h":106},"z":{"x":8467,"y":0,"w":102,"h":106},"{":{"x":8571,"y":0,"w":97,"h":106},"|":{"x":8670,"y":0,"w":86,"h":106},"}":{"x":8758,"y":0,"w":97,"h":106},"~":{"x":8857,"y":0,"w":92,"h":106},"\u00a2":{"x":8951,"y":0,"w":96,"h":106},"\u00a3":{"x":9049,"y":0,"w":97,"h":106},"\u00a5":{"x":9148,"y":0,"w":97,"h":106},"\u00a9":{"x":9247,"y":0,"w":104,"h":106},"\u00ae":{"x":9353,"y":0,"w":108,"h":106},"\u2014":{"x":9463,"y":0,"w":91,"h":106},"\u201c":{"x":9556,"y":0,"w":99,"h":106},"\u201d":{"x":9657,"y":0,"w":71,"h":106},"\u2026":{"x":9730,"y":0,"w":85,"h":106},"\u20ac":{"x":9817,"y":0,"w":97,"h":106},"\u2122":{"x":9916,"y":0,"w":99,"h":106},"\ue000":{"x":10017,"y":0,"w":90,"h":106}};

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
            `margin-right:-${Math.round(38 * scale)}px`,
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
          sp.style.cssText = `display:inline-block;width:${Math.round(60 * scale)}px`;
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
