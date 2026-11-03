// Página pública de matrícula — Turmalina
// Por enquanto os dados da escola estão "mockados" aqui.
// TODO: buscar escola e cursos da API pública (ver TUR-152).

const school = {
  slug: 'instituto-horizonte',
  name: 'Instituto Horizonte de Idiomas',
  courses: [
    { id: 'ing-basico', name: 'Inglês — Básico' },
    { id: 'ing-intermediario', name: 'Inglês — Intermediário' },
    { id: 'ing-avancado', name: 'Inglês — Avançado' },
    { id: 'esp-basico', name: 'Espanhol — Básico' },
  ],
};

const form = document.getElementById('enrollment-form');
const courseSelect = document.getElementById('course');
const errorBox = document.getElementById('form-error');
const successBox = document.getElementById('success');
const submitButton = form.querySelector('.btn-submit');

function renderCourses() {
  school.courses.forEach((course) => {
    const option = document.createElement('option');
    option.value = course.id;
    option.textContent = course.name;
    courseSelect.appendChild(option);
  });
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = '';
  errorBox.hidden = true;
}

// Simula o envio para a API. A integração real será feita na TUR-152.
function fakeSubmit(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('[matricula] payload enviado:', payload);
      resolve({ ok: true });
    }, 800);
  });
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearError();

  if (!form.checkValidity()) {
    showError('Preencha todos os campos obrigatórios e aceite a política de privacidade.');
    return;
  }

  const payload = Object.fromEntries(new FormData(form).entries());
  payload.school = school.slug;

  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  try {
    await fakeSubmit(payload);
    form.hidden = true;
    successBox.hidden = false;
  } catch (err) {
    showError('Não foi possível enviar agora. Tente novamente em instantes.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Quero me matricular';
  }
});

renderCourses();
