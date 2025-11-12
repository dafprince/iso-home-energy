/* ========================================
   EXCEL GENERATOR - ISO HOME ENERGY
   Génération de fichiers Excel pour les devis
   ======================================== */

import * as XLSX from 'xlsx';
import { formatPrice, formatDate, formatPhoneNumber } from './formatters';

/**
 * Générer un fichier Excel pour un devis d'éligibilité
 * @param {object} formData - Données du formulaire
 * @param {object} resultat - Résultat du calcul d'éligibilité
 * @returns {void}
 */
export const generateEligibilityExcel = (formData, resultat) => {
  try {
    // Créer un nouveau workbook
    const wb = XLSX.utils.book_new();
    
    // ========== FEUILLE 1 : INFORMATIONS CLIENT ==========
    
    const clientData = [
      ['ISO HOME ENERGY - DEVIS D\'ÉLIGIBILITÉ'],
      [''],
      ['Date', formatDate(new Date(), 'full')],
      [''],
      ['INFORMATIONS CLIENT'],
      ['Nom', formData.nom],
      ['Prénom', formData.prenom],
      ['Email', formData.email],
      ['Téléphone', formatPhoneNumber(formData.telephone)],
      [''],
      ['ADRESSE'],
      ['Adresse', formData.adresse || ''],
      ['Code Postal', formData.codePostal],
      ['Ville', formData.ville],
      [''],
      ['INFORMATIONS LOGEMENT'],
      ['Type de logement', formData.typeLogement],
      ['Statut occupant', formData.statutOccupant],
      ['Surface (m²)', formData.surface],
      ['Année de construction', formData.anneeConstruction || 'Non renseignée'],
      [''],
      ['INFORMATIONS FINANCIÈRES'],
      ['Revenu fiscal de référence', formatPrice(formData.revenuFiscal)],
      ['Nombre de personnes', formData.nbPersonnes],
      ['Profil MaPrimeRénov\'', resultat.profilName],
      [''],
      ['SERVICES DEMANDÉS'],
      ['Services', formData.services.join(', ')]
    ];
    
    const ws1 = XLSX.utils.aoa_to_sheet(clientData);
    
    // Style pour le titre
    ws1['A1'].s = {
      font: { bold: true, sz: 16 },
      alignment: { horizontal: 'center' }
    };
    
    XLSX.utils.book_append_sheet(wb, ws1, 'Client');
    
    // ========== FEUILLE 2 : RÉSULTAT ÉLIGIBILITÉ ==========
    
    const eligibilityData = [
      ['RÉSULTAT DU TEST D\'ÉLIGIBILITÉ'],
      [''],
      ['ÉLIGIBILITÉ'],
      ['Éligible', resultat.eligible ? 'OUI' : 'NON'],
      ['Profil', resultat.profilName],
      ['Taux de financement', resultat.tauxFinancement + '%'],
      [''],
      ['AIDES FINANCIÈRES'],
      ['MaPrimeRénov\'', formatPrice(resultat.totalMaprimerenov)],
      ['Certificats d\'Économies d\'Énergie (CEE)', formatPrice(resultat.totalCEE)],
      ['Éco-PTZ disponible', formatPrice(resultat.ecoPtz)],
      ['Économie TVA (5,5%)', formatPrice(resultat.tvaReduite)],
      [''],
      ['TOTAL AIDES', formatPrice(resultat.totalAides)],
      ['MONTANT TOTAL AVEC ÉCO-PTZ', formatPrice(resultat.montantTotal)],
      [''],
      ['ÉCONOMIES ESTIMÉES'],
      ['Économies annuelles', formatPrice(resultat.economiesAnnuelles) + ' / an']
    ];
    
    const ws2 = XLSX.utils.aoa_to_sheet(eligibilityData);
    XLSX.utils.book_append_sheet(wb, ws2, 'Éligibilité');
    
    // ========== FEUILLE 3 : DÉTAIL PAR SERVICE ==========
    
    const servicesData = [
      ['DÉTAIL DES AIDES PAR SERVICE'],
      [''],
      ['Service', 'MaPrimeRénov\'', 'Prime CEE', 'Total', 'Taux']
    ];
    
    Object.entries(resultat.aidesParService).forEach(([service, aides]) => {
      const serviceNames = {
        isolation: 'Isolation',
        facade: 'Façade ITE',
        pompeChaleur: 'Pompe à Chaleur',
        menuiserie: 'Menuiserie'
      };
      
      servicesData.push([
        serviceNames[service] || service,
        formatPrice(aides.maprimerenov),
        formatPrice(aides.cee),
        formatPrice(aides.total),
        aides.taux + '%'
      ]);
    });
    
    servicesData.push([]);
    servicesData.push(['TOTAL', 
      formatPrice(resultat.totalMaprimerenov),
      formatPrice(resultat.totalCEE),
      formatPrice(resultat.totalAides),
      resultat.tauxFinancement + '%'
    ]);
    
    const ws3 = XLSX.utils.aoa_to_sheet(servicesData);
    XLSX.utils.book_append_sheet(wb, ws3, 'Détail Services');
    
    // ========== FEUILLE 4 : INFORMATIONS LÉGALES ==========
    
    const legalData = [
      ['INFORMATIONS LÉGALES ET CONTACT'],
      [''],
      ['ISO HOME ENERGY'],
      ['31 rue de la Meurthe'],
      ['88650 Saint-Léonard'],
      [''],
      ['Téléphone : 07 88 09 70 70'],
      ['Email : contact@ih-energy.fr'],
      [''],
      ['CERTIFICATIONS'],
      ['- Certifié RGE (Reconnu Garant de l\'Environnement)'],
      ['- Qualibat'],
      ['- Partenaire MaPrimeRénov\''],
      [''],
      ['NOTES IMPORTANTES'],
      ['- Ce document est une estimation basée sur les informations fournies'],
      ['- Les montants définitifs seront confirmés après audit technique'],
      ['- Les aides sont soumises à conditions et peuvent évoluer'],
      ['- Devis gratuit et sans engagement'],
      ['- Accompagnement complet dans toutes les démarches'],
      [''],
      ['Date d\'édition : ' + formatDate(new Date(), 'full')],
      ['Valable 3 mois']
    ];
    
    const ws4 = XLSX.utils.aoa_to_sheet(legalData);
    XLSX.utils.book_append_sheet(wb, ws4, 'Informations');
    
    // ========== GÉNÉRATION DU FICHIER ==========
    
    const fileName = `Devis_Eligibilite_${formData.nom}_${formData.prenom}_${new Date().getTime()}.xlsx`;
    
    // Écrire le fichier
    XLSX.writeFile(wb, fileName);
    
    return {
      success: true,
      fileName,
      message: 'Fichier Excel généré avec succès !'
    };
    
  } catch (error) {
    console.error('Erreur génération Excel:', error);
    return {
      success: false,
      message: 'Erreur lors de la génération du fichier Excel',
      error
    };
  }
};

/**
 * Générer un fichier Excel pour un contact simple
 * @param {object} formData - Données du formulaire
 * @returns {void}
 */
export const generateContactExcel = (formData) => {
  try {
    const wb = XLSX.utils.book_new();
    
    const contactData = [
      ['ISO HOME ENERGY - DEMANDE DE CONTACT'],
      [''],
      ['Date', formatDate(new Date(), 'full')],
      [''],
      ['INFORMATIONS CLIENT'],
      ['Nom', formData.nom],
      ['Prénom', formData.prenom],
      ['Email', formData.email],
      ['Téléphone', formatPhoneNumber(formData.telephone)],
      [''],
      ['MESSAGE'],
      ['', formData.message]
    ];
    
    const ws = XLSX.utils.aoa_to_sheet(contactData);
    XLSX.utils.book_append_sheet(wb, ws, 'Contact');
    
    const fileName = `Contact_${formData.nom}_${formData.prenom}_${new Date().getTime()}.xlsx`;
    XLSX.writeFile(wb, fileName);
    
    return {
      success: true,
      fileName,
      message: 'Fichier Excel généré avec succès !'
    };
    
  } catch (error) {
    console.error('Erreur génération Excel contact:', error);
    return {
      success: false,
      message: 'Erreur lors de la génération du fichier',
      error
    };
  }
};

/**
 * Générer un rapport Excel de tous les services
 * @param {array} services - Liste des services
 * @returns {void}
 */
export const generateServicesReport = (services) => {
  try {
    const wb = XLSX.utils.book_new();
    
    const servicesData = [
      ['CATALOGUE DES SERVICES - ISO HOME ENERGY'],
      [''],
      ['Service', 'Description', 'Durée Chantier', 'Garantie', 'Aides Disponibles']
    ];
    
    services.forEach(service => {
      servicesData.push([
        service.name,
        service.shortDescription,
        service.dureeChantier,
        service.garantie,
        service.aidesDisponibles.join(', ')
      ]);
    });
    
    const ws = XLSX.utils.aoa_to_sheet(servicesData);
    XLSX.utils.book_append_sheet(wb, ws, 'Services');
    
    const fileName = `Catalogue_Services_ISO_HOME_${new Date().getTime()}.xlsx`;
    XLSX.writeFile(wb, fileName);
    
    return {
      success: true,
      fileName
    };
    
  } catch (error) {
    console.error('Erreur génération rapport services:', error);
    return {
      success: false,
      error
    };
  }
};

/**
 * Exporter les données au format CSV
 * @param {array} data - Données à exporter
 * @param {string} fileName - Nom du fichier
 * @returns {void}
 */
export const exportToCSV = (data, fileName = 'export.csv') => {
  try {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Export');
    XLSX.writeFile(wb, fileName, { bookType: 'csv' });
    
    return {
      success: true,
      fileName
    };
    
  } catch (error) {
    console.error('Erreur export CSV:', error);
    return {
      success: false,
      error
    };
  }
};