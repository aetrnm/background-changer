const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic', // or 'monolith', or 'nano'

  showAlways: true,
  swatches: null,
  default: '#333333',

  components: {
    hue: true,

    interaction: {
      rgba: true,
      hex: true,
      input: true,
    },
  },
});

$('.pcr-interaction').append(
  '<button data-clipboard-target="#foo" id="copy-btn" class="btn">COPY</button>'
);

var x = document.querySelectorAll('.pcr-type');

x[0].value = 'HEX';

const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', () => {
  $('.pcr-result').select();
  document.execCommand('copy');
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Copied',
    showConfirmButton: false,
    timer: 900,
  });
  setTimeout(function () {
    let sel = document.getSelection();
    sel.removeAllRanges();
  }, 1500);
});

pickr.on('change', (color, source, instance) => {
  document.body.style.background = `
  rgba(${color.toRGBA()[0]}, 
  ${color.toRGBA()[1]}, 
  ${color.toRGBA()[2]}, 1)
  `;
});
