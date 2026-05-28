class SlideBrochureFeature extends SlideBase {
  layoutTemplate(content, slots) {
    const heading = this.getAttribute('heading') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    return `
      <div class="br-feature-layout">
        <h1 class="ms-slide-title">${heading}</h1>
        ${subtitle ? `<p class="ms-slide-subtitle">${subtitle}</p>` : ''}
        <div class="br-feature-content">${content}</div>
      </div>
    `;
  }
}

customElements.define('slide-brochure-feature', SlideBrochureFeature);
