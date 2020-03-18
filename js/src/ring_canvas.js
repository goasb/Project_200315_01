class VisualControl {
    constructor(config) {
        this.control = config.control;
        this.tween = config.tween;
        this.draggable;
        this._setup();
    }

    _setup() {
        const self = this;
        this.draggable = Draggable.create(this.control, {
            type: 'rotation',
            throwProps: false,
            onDrag: function () {
                self.tween[1].kill();
                const currentDegRotate = (Math.abs(this.rotation / 360)) % 1;
                self.tween[0].progress(currentDegRotate);
            },
            onDragEnd: function () {
                self.tween[1].restart()
            }
        });
    }
}

// animation Draggable
const imageWrap = document.querySelector('.image-block');
const controlSvg = imageWrap.querySelector('#wl-features__control');
TweenMax.set(controlSvg, { x: 557, y: 95, xPercent: -50, yPercent: -50 });

const logoColor0 = '#E03C84';
const logoColor125 = '#1C93EC';

const logoWaveAnim = imageWrap.querySelectorAll('.logo__path-anim');
const controlPathSVG = imageWrap.querySelector('#pathControl__svg');
const controlColorAnim = controlPathSVG.querySelectorAll('#color');
const controlPathBounce = controlPathSVG.querySelector('#wl-features-pathControl');

const colorAnimTween = new TimelineMax({ paused: true })
    .to([logoWaveAnim, controlColorAnim], .2, { fill: logoColor0 })
    .to([logoWaveAnim, controlColorAnim], .35, { fill: logoColor125 })
    .to([logoWaveAnim, controlColorAnim], .45, { fill: logoColor0 });

const bounceTween = new TimelineMax({ repeat: -1, repeatDelay: 3 });

const tween = [colorAnimTween, bounceTween];

const visualControl = new VisualControl({
    control: controlPathSVG,
    tween,
});

bounceTween.to(controlPathBounce, .15, {
    rotation: -5,
    transformOrigin: '50% 50%',
    delay: 2,
    ease: CustomEase.create('custom', 'M0,0 C0.48,0 0.6,1 1,1'),
}).to(controlPathBounce, .15, {
    rotation: 10,
    ease: CustomEase.create('custom', 'M0,0 C0.45,0 0.66,1 1,1'),
}).to(controlPathBounce, .15, {
    rotation: -7,
    ease: CustomEase.create('custom', 'M0,0 C0.45,0 0.66,1 1,1'),
}).to(controlPathBounce, .18, {
    rotation: 5,
    ease: CustomEase.create('custom', 'M0,0 C0.37,0 0.62,1 1,1'),
}).to(controlPathBounce, .25, {
    rotation: 0,
    ease: CustomEase.create('custom', 'M0,0 C0.36,0 0.28,1 1,1'),
});