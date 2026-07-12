// ─── Contenu des documents légaux ─────────────────────────────────────────
// Les documents sont rédigés en français (langue juridique de l'éditeur).
// Chaque document est structuré en sections avec heading + items (paragraphes
// ou listes à puces préfixés par "• ").

export const LEGAL_CONTENT = {

    mentions_legales: {
        title: 'Mentions Légales',
        sections: [
            {
                heading: 'Éditeur de l\'application',
                items: [
                    'L\'application mobile "Paddock" et le CRM web associé sont édités par :',
                    '• Nom / Raison sociale : Mr Pontvianne Willy & Mr Jean-Charles Cucchi, co-dirigeants de l\'entreprise PADDOCK-AUTO',
                    '• Forme juridique : Auto-entreprise, au capital de 1 000 €',
                    '• Siège social : 10 place Antoine Tomasini, 83130 La Garde, France',
                    '• SIRET : 831937750',
                    '• Contact : contact@paddock-auto.fr',
                ],
            },
            {
                heading: 'Hébergement',
                items: [
                    'L\'architecture, les bases de données et les fichiers de l\'application sont hébergés par les services de Google Firebase.',
                    '• Hébergeur : Google Ireland Limited',
                    '• Adresse : Gordon House, Barrow Street, Dublin 4, Irlande',
                    '• Les serveurs Firestore et Storage sont localisés en Europe (région europe-west).',
                ],
            },
        ],
    },

    cgu: {
        title: 'Conditions Générales d\'Utilisation',
        sections: [
            {
                heading: 'Objet',
                items: [
                    'Les présentes CGU ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs accèdent et utilisent l\'application Paddock (ci-après "l\'Application"), un carnet d\'entretien numérique permettant de gérer les documents, les factures et l\'historique des véhicules.',
                ],
            },
            {
                heading: 'Accès et Inscription',
                items: [
                    'L\'accès à l\'Application nécessite la création d\'un compte. L\'utilisateur s\'engage à fournir des informations exactes (Nom, Prénom, Email, Téléphone en facultatif) et à garder son mot de passe confidentiel.',
                ],
            },
            {
                heading: 'Obligations de l\'Utilisateur',
                items: [
                    'L\'utilisateur est seul responsable des documents (factures, photos, cartes grises) qu\'il téléverse dans le "Coffre-Fort" ou la galerie de l\'Application.',
                    'Il s\'interdit de stocker des contenus illégaux, inappropriés ou violant les droits de tiers.',
                    'L\'Éditeur se réserve le droit de supprimer tout compte ne respectant pas ces règles.',
                ],
            },
            {
                heading: 'Disponibilité du Service',
                items: [
                    'L\'Éditeur s\'efforce de maintenir l\'Application accessible 24h/24 et 7j/7, mais n\'est tenu qu\'à une obligation de moyens.',
                    'L\'accès peut être temporairement suspendu pour des raisons de maintenance technique (mises à jour des serveurs).',
                ],
            },
            {
                heading: 'Limitation de responsabilité',
                items: [
                    'Paddock est un outil de suivi et d\'archivage personnel. Les données calculées (statistiques, rappels d\'entretien) sont fournies à titre indicatif.',
                    'L\'Éditeur ne saurait être tenu responsable d\'un défaut d\'entretien du véhicule, d\'une perte de documents originaux, ou d\'une avarie mécanique.',
                ],
            },
        ],
    },

    cgv: {
        title: 'Conditions Générales de Vente',
        sections: [
            {
                heading: 'Objet des CGV',
                items: [
                    'Les présentes CGV régissent la vente de l\'abonnement "Paddock Premium" (ou achat unique) débloquant des fonctionnalités avancées dans l\'Application.',
                ],
            },
            {
                heading: 'Prix et Paiement',
                items: [
                    'Les prix sont indiqués en euros toutes taxes comprises (TTC).',
                    'Le paiement s\'effectue via les plateformes de paiement sécurisées d\'Apple (App Store) ou de Google (Google Play).',
                    'Les conditions de paiement et de gestion des abonnements sont soumises aux conditions générales de ces plateformes tierces.',
                ],
            },
            {
                heading: 'Droit de rétractation',
                items: [
                    'Conformément à la réglementation sur les contenus numériques fournis sur un support immatériel dont l\'exécution a commencé avec l\'accord de l\'utilisateur, ce dernier renonce expressément à son droit de rétractation de 14 jours dès lors qu\'il accède aux fonctionnalités Premium immédiatement après l\'achat.',
                ],
            },
            {
                heading: 'Résiliation de l\'abonnement',
                items: [
                    'L\'utilisateur peut annuler son abonnement Premium à tout moment depuis les réglages de son compte Apple ou Google.',
                    'L\'annulation prendra effet à la fin de la période de facturation en cours.',
                ],
            },
        ],
    },

    confidentialite: {
        title: 'Politique de Confidentialité & Cookies',
        sections: [
            {
                heading: 'Données collectées',
                items: [
                    'Lors de l\'utilisation de Paddock, nous collectons les données suivantes :',
                    '• Données d\'identité : Nom, Prénom, Adresse email, Numéro de téléphone (facultatif).',
                    '• Données des véhicules : Marque, modèle, immatriculation, kilométrage, VIN, historique d\'entretien, contrôles techniques, pneus, assurances.',
                    '• Fichiers : Photos des véhicules et documents (factures, contrôles techniques, cartes grises) téléversés volontairement dans le Coffre-Fort et la Galerie.',
                    '• Localisation précise : utilisée uniquement lors d\'une recherche de stations-service ou de bornes de recharge à proximité.',
                    '• Identifiant publicitaire de l\'appareil : utilisé pour l\'affichage de publicités (Google AdMob), uniquement avec votre consentement.',
                    '• Données d\'abonnement : statut Premium et historique d\'achat, gérés via Apple/Google et notre prestataire technique RevenueCat.',
                ],
            },
            {
                heading: 'Finalité de la collecte',
                items: [
                    'Ces données sont utilisées pour :',
                    '1. Créer et sécuriser le compte utilisateur.',
                    '2. Assurer la synchronisation du carnet d\'entretien entre l\'application mobile et le CRM, et sa sauvegarde en cas de changement d\'appareil (fonctionnalité Premium).',
                    '3. Vous proposer les stations-service et bornes de recharge les plus proches de votre position.',
                    '4. Financer le service via l\'affichage de publicités, personnalisées uniquement avec votre consentement.',
                    '5. Gérer votre abonnement Premium et vos éventuels essais gratuits.',
                ],
            },
            {
                heading: 'Authentification biométrique',
                items: [
                    'Si vous activez le déverrouillage par Face ID, vos données biométriques restent gérées exclusivement par le système iOS et ne sont jamais transmises à Paddock ni à ses serveurs. L\'application ne reçoit qu\'une confirmation de réussite ou d\'échec, et stocke vos identifiants de connexion de façon chiffrée, localement sur votre appareil (Trousseau iOS).',
                ],
            },
            {
                heading: 'Hébergement et Sécurité',
                items: [
                    'Les données sont hébergées sur les serveurs sécurisés de Google Firebase (Google Cloud Platform), en Europe.',
                    'Les communications entre l\'Application et les serveurs sont chiffrées (HTTPS).',
                    'L\'accès aux documents est restreint au propriétaire du compte grâce aux règles de sécurité de la base de données.',
                    'L\'envoi de nos e-mails (vérification de compte, réinitialisation de mot de passe) est assuré par un prestataire technique tiers.',
                ],
            },
            {
                heading: 'Partage des données',
                items: [
                    'Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.',
                    '• Les données liées à un véhicule peuvent être transférées à un nouvel utilisateur uniquement si le propriétaire actuel utilise la fonction "Cession de véhicule" de son plein gré.',
                    '• Google (AdMob) peut recevoir l\'identifiant publicitaire de votre appareil pour l\'affichage de publicités, uniquement si vous y acceptez.',
                    '• RevenueCat, notre prestataire de gestion des abonnements, reçoit votre statut d\'abonnement — jamais vos moyens de paiement, qui restent gérés exclusivement par Apple ou Google.',
                    '• Lors d\'une recherche par plaque d\'immatriculation, celle-ci est transmise à un service tiers de consultation du fichier des immatriculations (SIV), à votre demande explicite.',
                ],
            },
            {
                heading: 'Vos droits (RGPD)',
                items: [
                    'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données.',
                    '• Vous pouvez modifier vos données directement depuis l\'Application.',
                    '• Vous pouvez supprimer définitivement votre compte et l\'intégralité de vos données via le bouton "Supprimer mon compte" dans les paramètres.',
                    '• Pour toute autre demande : contact@paddock-auto.fr',
                ],
            },
            {
                heading: 'Publicité, cookies et traceurs',
                items: [
                    'L\'Application utilise un jeton de session (équivalent d\'un cookie) indispensable au fonctionnement du compte, via Firebase Authentication. Il ne nécessite pas de consentement préalable.',
                    '• Publicités : l\'Application affiche des publicités via Google AdMob. Sur iOS, l\'utilisation de l\'identifiant publicitaire de votre appareil pour personnaliser ces publicités est soumise à votre autorisation explicite (App Tracking Transparency), demandée au premier lancement. Un formulaire de consentement est également présenté aux utilisateurs européens conformément au RGPD.',
                    '• Vous pouvez refuser ou retirer ce consentement à tout moment dans les réglages de votre appareil (Réglages > Confidentialité et sécurité > Suivi) : l\'Application continue de fonctionner normalement, avec des publicités non personnalisées.',
                    '• Aucun cookie ou traceur n\'est utilisé à d\'autres fins que celles décrites ci-dessus.',
                ],
            },
        ],
    },
};
