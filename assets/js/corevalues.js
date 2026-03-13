/* ============================================================
   HIMAPROM - Core Values Circular Diagram Animation
   ============================================================ */

(function() {

  const diagram = document.querySelector('.values-diagram');
  if (!diagram) return;

  const nodes = diagram.querySelectorAll('.value-node');
  const ring2 = diagram.querySelector('.diagram-ring-2');

  // Hover effect for value items
  const valueItems = document.querySelectorAll('.value-item');
  const nodeMap = {
    0: 0, 1: 1, 2: 2, 3: 3
  };

  valueItems.forEach((item, i) => {
    item.addEventListener('mouseenter', () => {
      nodes.forEach(n => n.style.borderColor = 'rgba(201, 168, 76, 0.25)');
      if (nodes[i]) {
        nodes[i].style.borderColor = 'rgba(201, 168, 76, 1)';
        nodes[i].style.background = 'rgba(201, 168, 76, 0.2)';
        nodes[i].style.transform = getNodeTransform(i, 1.15);
      }
    });

    item.addEventListener('mouseleave', () => {
      nodes.forEach(n => {
        n.style.borderColor = '';
        n.style.background = '';
        n.style.transform = getNodeTransform(nodes[n.__index] ? n.__index : 0, 1);
      });
      if (nodes[i]) {
        nodes[i].style.transform = getOriginalTransform(i);
      }
    });
  });

  function getOriginalTransform(index) {
    const transforms = [
      'translateX(-50%)',
      'translateY(-50%)',
      'translateX(-50%)',
      'translateY(-50%)'
    ];
    return transforms[index] || '';
  }

  function getNodeTransform(index, scale) {
    const transforms = [
      `translateX(-50%) scale(${scale})`,
      `translateY(-50%) scale(${scale})`,
      `translateX(-50%) scale(${scale})`,
      `translateY(-50%) scale(${scale})`
    ];
    return transforms[index] || `scale(${scale})`;
  }

  // Pulsing center animation
  const center = diagram.querySelector('.diagram-center');
  if (center) {
    setInterval(() => {
      center.style.boxShadow = '0 0 20px rgba(201, 168, 76, 0.3)';
      setTimeout(() => {
        center.style.boxShadow = '0 0 0px rgba(201, 168, 76, 0)';
      }, 800);
    }, 2000);
  }

  // Animate ring rotation pause on hover
  if (ring2) {
    diagram.addEventListener('mouseenter', () => {
      ring2.style.animationPlayState = 'paused';
    });
    diagram.addEventListener('mouseleave', () => {
      ring2.style.animationPlayState = 'running';
    });
  }

})();
