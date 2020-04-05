import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue';
import store from './store.js';
import { BootstrapVue } from 'bootstrap-vue'
import SimpleVueValidation from 'simple-vue-validator';
import DatePicker from 'vue2-datepicker';
import VueI18n from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-github-buttons/dist/vue-github-buttons.css'; // Stylesheet
import VueGitHubButtons from 'vue-github-buttons'; // Component plugin
import { faFacebook,
         faInstagram,
         faLinkedinIn,
         faGithub,
         faBehance,
         faDribbble,
         faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {  faPhone,
          faAt,
          faGlobeAfrica,
          faPencilAlt,
          faBriefcase,
          faBoxOpen,
          faUniversity,
          faWrench,
          faLanguage,
          faPlus,
          faInfo,
          faEdit,
          faCameraRetro,
          faTimes,
          faFilePdf
} from '@fortawesome/free-solid-svg-icons'

// Install FontAwesome
library.add(  faPhone,
              faAt,
              faGlobeAfrica,
              faFacebook,
              faInstagram,
              faLinkedinIn,
              faPencilAlt,
              faBriefcase,
              faBoxOpen,
              faUniversity,
              faWrench,
              faLanguage,
              faPlus,
              faInfo,
              faEdit,
              faCameraRetro,
              faTimes,
              faGithub,
              faBehance,
              faDribbble,
              faTwitter,
              faFilePdf
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(Vuex);
Vue.use(DatePicker);
Vue.use(SimpleVueValidation);
Vue.use(VueGitHubButtons, { useCache: true });
Vue.use(VueI18n);

//you need to import the CSS manually (in case you want to override it)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2-datepicker/index.css';

Vue.config.productionTip = false;


// Ready translated locale messages
const messages = {
    en: {   // English
        tabs: {
            experience: 'Experience',
            more: 'More',
            infos: 'Infos',
            project: 'Project',
            education: 'Education',
        },
        labels: {
            fullName: 'Full Name',
            job: 'Desired Job',
            phone: 'Phone Number',
            email: 'Email',
            links: 'Add your Links',
            socialNetworks: 'Add your Social Media',
            resume: 'Resume',
            role: 'Add your Role',
            company: 'Add Company Name',
            fromTo: 'From - To',
            description: 'Description',
            tags: 'Add some Relative Tags',
            projectName: 'Project Name',
            projectLink: 'Project Link',
            schoolName: 'School Name',
            schoolDegree: 'School Degree',
            skills: 'Add your Skill',
            languages: 'Add your Language',
            interests: 'Add your Interests',
        },
        placeholders: {
            fullName: 'Enter your Full Name',
            job: 'Enter your Desired Job',
            phone: 'Enter your Phone Number',
            email: 'Enter your Email',
            links: 'Add your links',
            socialNetworks: 'Please Select a Social media',
            pseudo: 'Enter your Pseudo',
            resume: 'Write something about you',
            role: 'Your Role',
            company: 'Enter your Company Name',
            fromTo: 'From - To',
            description: 'Write something about your experience',
            tags: 'Add some Relative Tags',
            projectName: 'Your Project Name',
            projectLink: 'Project Link',
            schoolName: 'Enter School Name',
            schoolDegree: 'Your School Degree',
            skills: 'What is Your Skill',
            languages: 'What is Your Language',
            interests: 'Add What your Interest for',
        },
        buttons: {
            previous: 'Previous',
            next: 'Next',
            add: 'Add',
        },
        toggles: {
            delete: 'Delete Me',
            edit: 'Edit Me',
            change: 'Change Me',
            cancel: 'Cancel',
            submit: 'Submit',
            print: 'Print me',
        },
        titles: {
            resume: 'Resume',
            experiences: 'Experiences',
            Projects: 'Projects',
            skills: 'Skills',
            languages: 'Languages',
            educations: 'Educations',
            interests: 'Interests',
        }
    },
    fr: { // Francais
        tabs: {
            experience: 'Expérience',
            more: 'Plus',
            infos: 'Infos',
            project: 'Projet',
            education: 'Education',
        },
        labels: {
            fullName: 'Nom Complet',
            job: 'Emploi Désiré',
            phone: 'Numéro de Téléphone',
            email: 'Email',
            links: 'Ajoutez vos Liens',
            socialNetworks: 'Ajoutez vos Réseaux Sociaux',
            resume: 'Résumer',
            role: 'Ajoutez votre Rôle',
            company: 'Ajouter le Nom de l\'Entreprise',
            fromTo: 'De - À',
            description: 'Description',
            tags: 'Ajouter des Balises Relatives',
            projectName: 'Nom du Projet',
            projectLink: 'Lien du Projet',
            schoolName: 'Nom de l\'école',
            schoolDegree: 'Diplôme Scolaire',
            skills: 'Ajoutez Votre Compétence',
            languages: 'Ajoutez Votre Langue',
            interests: 'Ajoutez vos Centres d\'Intérêt',
        },
        placeholders: {
            fullName: 'Saisie Votre Nom Complet',
            job: 'Saisie Votre Emploi Souhaité',
            phone: 'Saisie Votre Numéro de Téléphone',
            email: 'Saisie votre Email',
            links: 'Saisie vos liens',
            socialNetworks: 'Veuillez Sélectionner un Média Social',
            pseudo: 'Saisie Votre Pseudo',
            resume: 'Écrivez quelque chose sur vous',
            role: 'Saisie Ton Rôle',
            company: 'Saisie le Nom de Votre Entreprise',
            fromTo: 'De - À',
            description: 'Écrivez Quelque Chose Sur Votre Expérience',
            tags: 'Saisie des Balises Relatives',
            projectName: 'Saisie le Nom de Votre Projet',
            projectLink: 'Saisie Lien du Projet',
            schoolName: 'Saisie le Nom de l\'école',
            schoolDegree: 'Saisie le Diplôme d\'études',
            skills: 'Quelles est Votre Compétence',
            languages: 'Quelles est Votre langue',
            interests: 'Ajoutez Ce Qui Vous Intéresse',
        },
        buttons: {
            previous: 'Précédent',
            next: 'Suivant',
            add: 'Ajouter',
        },
        toggles: {
            delete: 'Supprime Moi',
            edit: 'Éditez-Moi',
            change: 'Changer Moi',
            cancel: 'Annuler',
            submit: 'Valider',
            print: 'Imprime Moi',
        },
        titles: {
            resume: 'Resumer',
            experiences: 'Expériences',
            projects: 'Projets',
            skills: 'Compétences',
            languages: 'Langues',
            educations: 'Éducations',
            interests: 'Centres d\'Intérêt',
        }
    }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'fr', // set locale
    messages, // set locale messages
});



new Vue({
  store, i18n,
  render: h => h(App),
}).$mount('#app');
