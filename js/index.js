function canvas() {
  const canvas = document.querySelector("#canvas1 > canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
     images/canvas_1/0003.webp
  ../images/canvas_1/0004.webp
  ../images/canvas_1/0005.webp
  ../images/canvas_1/0006.webp
  ../images/canvas_1/0007.webp
  ../images/canvas_1/0008.webp
  ../images/canvas_1/0009.webp
  ../images/canvas_1/0010.webp
  ../images/canvas_1/0011.webp
  ../images/canvas_1/0012.webp
  ../images/canvas_1/0013.webp
  ../images/canvas_1/0014.webp
  ../images/canvas_1/0015.webp
  ../images/canvas_1/0016.webp
  ../images/canvas_1/0017.webp
  ../images/canvas_1/0018.webp
  ../images/canvas_1/0019.webp
  ../images/canvas_1/0020.webp
  ../images/canvas_1/0021.webp
  ../images/canvas_1/0022.webp
  ../images/canvas_1/0023.webp
  ../images/canvas_1/0024.webp
  ../images/canvas_1/0025.webp
  ../images/canvas_1/0026.webp
  ../images/canvas_1/0027.webp
  ../images/canvas_1/0028.webp
  ../images/canvas_1/0029.webp
  ../images/canvas_1/0030.webp
  ../images/canvas_1/0031.webp
  ../images/canvas_1/0032.webp
  ../images/canvas_1/0033.webp
  ../images/canvas_1/0034.webp
  ../images/canvas_1/0035.webp
  ../images/canvas_1/0036.webp
  ../images/canvas_1/0037.webp
  ../images/canvas_1/0038.webp
  ../images/canvas_1/0039.webp
  ../images/canvas_1/0040.webp
  ../images/canvas_1/0041.webp
  ../images/canvas_1/0042.webp
  ../images/canvas_1/0043.webp
  ../images/canvas_1/0044.webp
  ../images/canvas_1/0045.webp
  ../images/canvas_1/0046.webp
  ../images/canvas_1/0047.webp
  ../images/canvas_1/0048.webp
  ../images/canvas_1/0049.webp
  ../images/canvas_1/0050.webp
  ../images/canvas_1/0051.webp
  ../images/canvas_1/0052.webp
  ../images/canvas_1/0053.webp
  ../images/canvas_1/0054.webp
  ../images/canvas_1/0055.webp
  ../images/canvas_1/0056.webp
  ../images/canvas_1/0057.webp
  ../images/canvas_1/0058.webp
  ../images/canvas_1/0059.webp
  ../images/canvas_1/0060.webp
  ../images/canvas_1/0061.webp
  ../images/canvas_1/0062.webp
  ../images/canvas_1/0063.webp
  ../images/canvas_1/0064.webp
  ../images/canvas_1/0065.webp
  ../images/canvas_1/0066.webp
  ../images/canvas_1/0067.webp
  ../images/canvas_1/0068.webp
  ../images/canvas_1/0069.webp
  ../images/canvas_1/0070.webp
  ../images/canvas_1/0071.webp
  ../images/canvas_1/0072.webp
  ../images/canvas_1/0073.webp
  ../images/canvas_1/0074.webp
  ../images/canvas_1/0075.webp
  ../images/canvas_1/0076.webp
  ../images/canvas_1/0077.webp
  ../images/canvas_1/0078.webp
  ../images/canvas_1/0079.webp
  ../images/canvas_1/0080.webp
  ../images/canvas_1/0081.webp
  ../images/canvas_1/0082.webp
  ../images/canvas_1/0083.webp
  ../images/canvas_1/0084.webp
  ../images/canvas_1/0085.webp
  ../images/canvas_1/0086.webp
  ../images/canvas_1/0087.webp
  ../images/canvas_1/0088.webp
  ../images/canvas_1/0089.webp
  ../images/canvas_1/0090.webp
  ../images/canvas_1/0091.webp
  ../images/canvas_1/0092.webp
  ../images/canvas_1/0093.webp
  ../images/canvas_1/0094.webp
  ../images/canvas_1/0095.webp
  ../images/canvas_1/0096.webp
  ../images/canvas_1/0097.webp
  ../images/canvas_1/0098.webp
  ../images/canvas_1/0099.webp
  ../images/canvas_1/0100.webp
  ../images/canvas_1/0101.webp
  ../images/canvas_1/0102.webp
  ../images/canvas_1/0103.webp
  ../images/canvas_1/0104.webp
  ../images/canvas_1/0105.webp
  ../images/canvas_1/0106.webp
  ../images/canvas_1/0107.webp
  ../images/canvas_1/0108.webp
  ../images/canvas_1/0109.webp
  ../images/canvas_1/0110.webp
  ../images/canvas_1/0111.webp
  ../images/canvas_1/0112.webp
  ../images/canvas_1/0113.webp
  ../images/canvas_1/0114.webp
  ../images/canvas_1/0115.webp
  ../images/canvas_1/0116.webp
  ../images/canvas_1/0117.webp
  ../images/canvas_1/0118.webp
  ../images/canvas_1/0119.webp
  ../images/canvas_1/0120.webp
  ../images/canvas_1/0121.webp
  ../images/canvas_1/0122.webp
  ../images/canvas_1/0123.webp
  ../images/canvas_1/0124.webp
  ../images/canvas_1/0125.webp
  ../images/canvas_1/0126.webp
  ../images/canvas_1/0127.webp
  ../images/canvas_1/0128.webp
  ../images/canvas_1/0129.webp
  ../images/canvas_1/0130.webp
  ../images/canvas_1/0131.webp
  ../images/canvas_1/0132.webp
  ../images/canvas_1/0133.webp
  ../images/canvas_1/0134.webp
  ../images/canvas_1/0135.webp
  ../images/canvas_1/0136.webp
  ../images/canvas_1/0137.webp
  ../images/canvas_1/0138.webp
  ../images/canvas_1/0139.webp
  ../images/canvas_1/0140.webp
  ../images/canvas_1/0141.webp
  ../images/canvas_1/0142.webp
  ../images/canvas_1/0143.webp
  ../images/canvas_1/0144.webp
  ../images/canvas_1/0145.webp
  ../images/canvas_1/0146.webp
  ../images/canvas_1/0147.webp
  ../images/canvas_1/0148.webp
  ../images/canvas_1/0149.webp
  ../images/canvas_1/0150.webp
  ../images/canvas_1/0151.webp
  ../images/canvas_1/0152.webp
  ../images/canvas_1/0153.webp
  ../images/canvas_1/0154.webp
  ../images/canvas_1/0155.webp
  ../images/canvas_1/0156.webp
  ../images/canvas_1/0157.webp
  ../images/canvas_1/0158.webp
  ../images/canvas_1/0159.webp
  ../images/canvas_1/0160.webp
  ../images/canvas_1/0161.webp
  ../images/canvas_1/0162.webp
  ../images/canvas_1/0163.webp
  ../images/canvas_1/0164.webp
  ../images/canvas_1/0165.webp
  ../images/canvas_1/0166.webp
  
    `;
    return data.split("\n")[index];
  }

  const frameCount = 164;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#canvas1`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
    var centerX = (canvas.width - img.width * ratio) / 2;
    var centerY = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, centerX, centerY, img.width * ratio, img.height * ratio);
  }
  ScrollTrigger.create({
    trigger: "#canvas1",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas();

function canvas2() {
  const canvas = document.querySelector("#canvas2 > canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ../images/canvas_2/0174.webp
    ../images/canvas_2/0175.webp
    ../images/canvas_2/0176.webp
    ../images/canvas_2/0177.webp
    ../images/canvas_2/0178.webp
    ../images/canvas_2/0179.webp
    ../images/canvas_2/0180.webp
    ../images/canvas_2/0181.webp
    ../images/canvas_2/0182.webp
    ../images/canvas_2/0183.webp
    ../images/canvas_2/0184.webp
    ../images/canvas_2/0185.webp
    ../images/canvas_2/0186.webp
    ../images/canvas_2/0187.webp
    ../images/canvas_2/0188.webp
    ../images/canvas_2/0189.webp
    ../images/canvas_2/0190.webp
    ../images/canvas_2/0191.webp
    ../images/canvas_2/0192.webp
    ../images/canvas_2/0193.webp
    ../images/canvas_2/0194.webp
    ../images/canvas_2/0195.webp
    ../images/canvas_2/0196.webp
    ../images/canvas_2/0197.webp
    ../images/canvas_2/0198.webp
    ../images/canvas_2/0199.webp
    ../images/canvas_2/0200.webp
    ../images/canvas_2/0201.webp
    ../images/canvas_2/0202.webp
    ../images/canvas_2/0203.webp
    ../images/canvas_2/0204.webp
    ../images/canvas_2/0205.webp
    ../images/canvas_2/0206.webp
    ../images/canvas_2/0207.webp
    ../images/canvas_2/0208.webp
    ../images/canvas_2/0209.webp
    ../images/canvas_2/0210.webp
    ../images/canvas_2/0211.webp
    ../images/canvas_2/0212.webp
    ../images/canvas_2/0213.webp
    ../images/canvas_2/0214.webp
    ../images/canvas_2/0215.webp
    ../images/canvas_2/0216.webp
    ../images/canvas_2/0217.webp
    ../images/canvas_2/0218.webp
    ../images/canvas_2/0219.webp
    ../images/canvas_2/0220.webp
    ../images/canvas_2/0221.webp
    ../images/canvas_2/0222.webp
    ../images/canvas_2/0223.webp
    ../images/canvas_2/0224.webp
    ../images/canvas_2/0225.webp
    ../images/canvas_2/0226.webp
    ../images/canvas_2/0227.webp
    ../images/canvas_2/0228.webp
    ../images/canvas_2/0229.webp
    ../images/canvas_2/0230.webp
    ../images/canvas_2/0231.webp
    ../images/canvas_2/0232.webp
    ../images/canvas_2/0233.webp
    ../images/canvas_2/0234.webp
    ../images/canvas_2/0235.webp
    ../images/canvas_2/0236.webp
    ../images/canvas_2/0237.webp
    ../images/canvas_2/0238.webp
    ../images/canvas_2/0239.webp
    ../images/canvas_2/0240.webp
    ../images/canvas_2/0241.webp
    ../images/canvas_2/0242.webp
    ../images/canvas_2/0243.webp
    ../images/canvas_2/0244.webp
    ../images/canvas_2/0245.webp
    ../images/canvas_2/0246.webp
    ../images/canvas_2/0247.webp
    ../images/canvas_2/0248.webp
    ../images/canvas_2/0249.webp
    ../images/canvas_2/0250.webp
    ../images/canvas_2/0251.webp
    ../images/canvas_2/0252.webp
    ../images/canvas_2/0253.webp
    ../images/canvas_2/0254.webp
    ../images/canvas_2/0255.webp
    ../images/canvas_2/0256.webp
    ../images/canvas_2/0257.webp
    ../images/canvas_2/0258.webp
    ../images/canvas_2/0259.webp
    ../images/canvas_2/0260.webp
    ../images/canvas_2/0261.webp
    ../images/canvas_2/0262.webp
    ../images/canvas_2/0263.webp
    ../images/canvas_2/0264.webp
    ../images/canvas_2/0265.webp
    ../images/canvas_2/0266.webp
    ../images/canvas_2/0267.webp
    ../images/canvas_2/0268.webp
    ../images/canvas_2/0269.webp
    ../images/canvas_2/0270.webp
    ../images/canvas_2/0271.webp
    ../images/canvas_2/0272.webp
    ../images/canvas_2/0273.webp
    ../images/canvas_2/0274.webp
    ../images/canvas_2/0275.webp
    ../images/canvas_2/0276.webp
    ../images/canvas_2/0277.webp
    ../images/canvas_2/0278.webp
    ../images/canvas_2/0279.webp
    ../images/canvas_2/0280.webp
    ../images/canvas_2/0281.webp
    ../images/canvas_2/0282.webp
    ../images/canvas_2/0283.webp
    ../images/canvas_2/0284.webp
    ../images/canvas_2/0285.webp
    ../images/canvas_2/0286.webp
    ../images/canvas_2/0287.webp
    ../images/canvas_2/0288.webp
    ../images/canvas_2/0289.webp
    ../images/canvas_2/0290.webp
    ../images/canvas_2/0291.webp
    ../images/canvas_2/0292.webp
    ../images/canvas_2/0293.webp
    ../images/canvas_2/0294.webp
    ../images/canvas_2/0295.webp
    ../images/canvas_2/0296.webp
    ../images/canvas_2/0297.webp
    ../images/canvas_2/0298.webp
    ../images/canvas_2/0299.webp
    ../images/canvas_2/0300.webp
    ../images/canvas_2/0301.webp
    ../images/canvas_2/0302.webp
    ../images/canvas_2/0303.webp
    ../images/canvas_2/0304.webp
    ../images/canvas_2/0305.webp
    ../images/canvas_2/0306.webp
    
    
      `;
    return data.split("\n")[index];
  }

  const frameCount = 133;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#canvas2`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
    var centerX = (canvas.width - img.width * ratio) / 2;
    var centerY = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, centerX, centerY, img.width * ratio, img.height * ratio);
  }
  ScrollTrigger.create({
    trigger: "#canvas2",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas2();

function canvas3() {
  const canvas = document.querySelector("#canvas3 > canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `

../images/canvas_3/0308.webp
../images/canvas_3/0309.webp
../images/canvas_3/0310.webp
../images/canvas_3/0311.webp
../images/canvas_3/0312.webp
../images/canvas_3/0313.webp
../images/canvas_3/0314.webp
../images/canvas_3/0315.webp
../images/canvas_3/0316.webp
../images/canvas_3/0317.webp
../images/canvas_3/0318.webp
../images/canvas_3/0319.webp
../images/canvas_3/0320.webp
../images/canvas_3/0321.webp
../images/canvas_3/0322.webp
../images/canvas_3/0323.webp
../images/canvas_3/0324.webp
../images/canvas_3/0325.webp
../images/canvas_3/0326.webp
../images/canvas_3/0327.webp
../images/canvas_3/0328.webp
../images/canvas_3/0329.webp
../images/canvas_3/0330.webp
../images/canvas_3/0331.webp
../images/canvas_3/0332.webp
../images/canvas_3/0333.webp
../images/canvas_3/0334.webp
../images/canvas_3/0335.webp
../images/canvas_3/0336.webp
../images/canvas_3/0337.webp
../images/canvas_3/0338.webp
../images/canvas_3/0339.webp
../images/canvas_3/0340.webp
../images/canvas_3/0341.webp
../images/canvas_3/0342.webp
../images/canvas_3/0343.webp
../images/canvas_3/0344.webp
../images/canvas_3/0345.webp
../images/canvas_3/0346.webp
../images/canvas_3/0347.webp
../images/canvas_3/0348.webp
../images/canvas_3/0349.webp
../images/canvas_3/0350.webp
../images/canvas_3/0351.webp
../images/canvas_3/0352.webp
../images/canvas_3/0353.webp
../images/canvas_3/0354.webp
../images/canvas_3/0355.webp
../images/canvas_3/0356.webp
../images/canvas_3/0357.webp
../images/canvas_3/0358.webp
../images/canvas_3/0359.webp
../images/canvas_3/0360.webp
../images/canvas_3/0361.webp
../images/canvas_3/0362.webp
../images/canvas_3/0363.webp
../images/canvas_3/0364.webp
../images/canvas_3/0365.webp
../images/canvas_3/0366.webp
../images/canvas_3/0367.webp
../images/canvas_3/0368.webp
../images/canvas_3/0369.webp
../images/canvas_3/0370.webp
../images/canvas_3/0371.webp
../images/canvas_3/0372.webp
../images/canvas_3/0373.webp
../images/canvas_3/0374.webp
../images/canvas_3/0375.webp
../images/canvas_3/0376.webp
../images/canvas_3/0377.webp
../images/canvas_3/0378.webp
../images/canvas_3/0379.webp
../images/canvas_3/0380.webp
../images/canvas_3/0381.webp
../images/canvas_3/0382.webp
../images/canvas_3/0383.webp
../images/canvas_3/0384.webp
../images/canvas_3/0385.webp
../images/canvas_3/0386.webp
../images/canvas_3/0387.webp
../images/canvas_3/0388.webp
../images/canvas_3/0389.webp
../images/canvas_3/0390.webp
../images/canvas_3/0391.webp
../images/canvas_3/0392.webp
../images/canvas_3/0393.webp
../images/canvas_3/0394.webp
../images/canvas_3/0395.webp
../images/canvas_3/0396.webp
../images/canvas_3/0397.webp
../images/canvas_3/0398.webp
../images/canvas_3/0399.webp
../images/canvas_3/0400.webp
../images/canvas_3/0401.webp
../images/canvas_3/0402.webp
../images/canvas_3/0403.webp
../images/canvas_3/0404.webp
../images/canvas_3/0405.webp
../images/canvas_3/0406.webp
../images/canvas_3/0407.webp
../images/canvas_3/0408.webp
../images/canvas_3/0409.webp
../images/canvas_3/0410.webp
../images/canvas_3/0411.webp
../images/canvas_3/0412.webp
../images/canvas_3/0413.webp
../images/canvas_3/0414.webp
../images/canvas_3/0415.webp
../images/canvas_3/0416.webp
../images/canvas_3/0417.webp
../images/canvas_3/0418.webp
../images/canvas_3/0419.webp
../images/canvas_3/0420.webp
../images/canvas_3/0421.webp
../images/canvas_3/0422.webp
../images/canvas_3/0423.webp
../images/canvas_3/0424.webp
../images/canvas_3/0425.webp
../images/canvas_3/0426.webp
../images/canvas_3/0427.webp
../images/canvas_3/0428.webp
../images/canvas_3/0429.webp
../images/canvas_3/0430.webp
../images/canvas_3/0431.webp
../images/canvas_3/0432.webp
../images/canvas_3/0433.webp
../images/canvas_3/0434.webp
../images/canvas_3/0435.webp
../images/canvas_3/0436.webp
../images/canvas_3/0437.webp
../images/canvas_3/0438.webp
../images/canvas_3/0439.webp
../images/canvas_3/0440.webp
../images/canvas_3/0441.webp
../images/canvas_3/0442.webp
../images/canvas_3/0443.webp
../images/canvas_3/0444.webp
../images/canvas_3/0445.webp
../images/canvas_3/0446.webp

      
        `;
    return data.split("\n")[index];
  }

  const frameCount = 140;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#canvas3`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
    var centerX = (canvas.width - img.width * ratio) / 2;
    var centerY = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, centerX, centerY, img.width * ratio, img.height * ratio);
  }
  ScrollTrigger.create({
    trigger: "#canvas3",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas3();

// Create a timeline
var tl = gsap.timeline();

// Add animations to the timeline
tl.from(".hero-section", {
  y: "100%",
  duration: 1,
  backgroundColor: "#111400",
})
  .from(
    ".hero-txt p",
    {
      delay: 1,
      scale: 0, // Initial scale
      transformOrigin: "top", // Set the transform origin
      transform: "perspective(400px) scaleZ(-1) rotateX(45deg)", // Corrected syntax for transform property
      duration: 0.1,
      stagger: 0.8,
    },
    "-=0.7"
  ) // Offset the start of this tween
  .from(
    ".hero-section .video > video",
    {
      delay: 1.5,
      display: "none",
      duration: 0.1,
    },
    "-=0.5"
  ); // Offset the start of this tween

gsap.from("#canvas1 .canvas_txt h3, #canvas1 .canvas_txt p", {
  y: "100%",
  opacity: 0,
  stagger: 0.1,
  //   yoyo: true,
  scrollTrigger: {
    trigger: "#canvas1 .canvas_txt h3, #canvas1 .canvas_txt p",
    scroller: "body",
    // markers: true,
    start: "top -130%",
    end: "top -150%",
    scrub: 2,
  },
});

gsap.from("#canvas2 .canvas_txt h3, #canvas2 .canvas_txt p", {
  y: "100%",
  opacity: 0,
  stagger: 0.1,
  //   yoyo: true,
  scrollTrigger: {
    trigger: "#canvas2 .canvas_txt h3, #canvas2 .canvas_txt p",
    scroller: "body",
    // markers: true,
    start: "top -80%",
    end: "top -110%",
    scrub: 2,
  },
});

gsap.from("#canvas3 .canvas_txt h3, #canvas3 .canvas_txt p", {
  y: "100%",
  opacity: 0,
  stagger: 0.1,
  //   yoyo: true,
  scrollTrigger: {
    trigger: "#canvas3 .canvas_txt h3, #canvas3 .canvas_txt p",
    scroller: "body",
    // markers: true,
    start: "top -90%",
    end: "top -110%",
    scrub: 2,
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
