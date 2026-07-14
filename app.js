/**
 * LAKMÉ ACADEMY LUDHIANA ADMISSIONS HIGH-PERFORMANCE LANDING ENGINE
 * Optimized strictly for structural event bindings, client validation logic, and analytics routing triggers.
 */
document.addEventListener("DOMContentLoaded", function() {

    // -------------------------------------------------------------
    // CONSTANT ELEMENT SELECTORS MATRICES
    // -------------------------------------------------------------
    const mainHeader = document.querySelector(".main-header");
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileNavDrawer = document.querySelector(".mobile-nav-drawer");
    const scrollProgressBar = document.getElementById("scroll-progress");
    const globalLeadForms = document.querySelectorAll(".admission-lead-form");
    
    // Modals Nodes
    const successModal = document.getElementById("success-modal");
    const enquiryModal = document.getElementById("enquiry-modal");
    const exitIntentModal = document.getElementById("exit-intent-modal");
    const targetModalCourseBadge = document.getElementById("target-modal-course-badge");
    const targetModalCourseTxt = document.getElementById("target-modal-course-txt");
    const modalHiddenCourseField = document.getElementById("modal-hidden-course-field");
    
    // Lightbox Components
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxTargetImg = document.getElementById("lightbox-target-img");
    const lightboxCaptionText = document.getElementById("lightbox-caption-text");
    
    // Floating Helpdesk Widget Nodes
    const mainWhatsappFloatingTriggerBtn = document.querySelector(".main-whatsapp-floating-trigger-btn");
    const desktopFloatingWhatsappWidget = document.querySelector(".desktop-floating-whatsapp-widget");
    const whatsappChatBubbleWindow = document.querySelector(".whatsapp-chat-bubble-window");
    const closeChatWindowBtn = document.querySelector(".close-chat-window-btn");

    // -------------------------------------------------------------
    // STICKY HEADER & SCROLL TRACK PROGRESS LOGIC
    // -------------------------------------------------------------
    window.addEventListener("scroll", function() {
        // Toggle Nav Bar Compression styling class
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }

        // Compute Scroll Percentage
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgressBar.style.width = scrolled + "%";

        // Evaluate Nav Links Spy Highlighter Elements
        spyActiveNavigationSections();
    });

    // Toggle Mobile Navigation Drawer Menu
    mobileMenuToggle.addEventListener("click", function() {
        const isOpen = mobileNavDrawer.classList.contains("open");
        if(isOpen) {
            mobileNavDrawer.classList.remove("open");
            mobileMenuToggle.setAttribute("aria-expanded", "false");
        } else {
            mobileNavDrawer.classList.add("open");
            mobileMenuToggle.setAttribute("aria-expanded", "true");
        }
    });

    // Close Mobile Drawer upon link selector interaction
    document.querySelectorAll(".drawer-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileNavDrawer.classList.remove("open");
        });
    });

    // -------------------------------------------------------------
    // HIGH IMPACT NAVIGATION SECTION SPY SCROLL CONTROLLER
    // -------------------------------------------------------------
    const navLinksList = document.querySelectorAll(".nav-link");
    const functionalSectionsList = document.querySelectorAll("main > section");

    function spyActiveNavigationSections() {
        let currentActiveSectionId = "";
        const scrollBufferThreshold = window.scrollY + 120;

        functionalSectionsList.forEach(section => {
            const sectionTopOffset = section.offsetTop;
            const sectionTotalHeight = section.offsetHeight;
            if (scrollBufferThreshold >= sectionTopOffset && scrollBufferThreshold < (sectionTopOffset + sectionTotalHeight)) {
                currentActiveSectionId = section.getAttribute("id");
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentActiveSectionId}`) {
                link.classList.add("active");
            }
        });
    }

    // -------------------------------------------------------------
    // URGENCY CAMPAIGN COUNTDOWN TIMER CORE ENGINE
    // -------------------------------------------------------------
    function initializeCampaignCountdownTimer() {
        // Target dynamic offset endpoint set to 3 full calendar days from actual user arrival event sequence
        const timeHorizonEndpoint = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

        const clockIntervalRunner = setInterval(function() {
            const now = new Date().getTime();
            const absoluteDistanceRemainder = timeHorizonEndpoint - now;

            if (absoluteDistanceRemainder < 0) {
                clearInterval(clockIntervalRunner);
                return;
            }

            const days = Math.floor(absoluteDistanceRemainder / (1000 * 60 * 60 * 24));
            const hours = Math.floor((absoluteDistanceRemainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((absoluteDistanceRemainder % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((absoluteDistanceRemainder % (1000 * 60)) / 1000);

            // Print metric fields to string vectors
            document.getElementById("days").innerText = String(days).padStart(2, '0');
            document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
        }, 1000);
    }
    initializeCampaignCountdownTimer();

    // Accelerated Custom Exit Modal Countdown Segment Loop
    let exitTimeDurationSeconds = 300; // 5 absolute minutes
    const exitTimerClockLabel = document.getElementById("exit-timer-clock");

    function runExitCounterLoop() {
        const exitTimerRunner = setInterval(() => {
            if(exitTimeDurationSeconds <= 0) {
                clearInterval(exitTimerRunner);
                return;
            }
            exitTimeDurationSeconds--;
            const mins = Math.floor(exitTimeDurationSeconds / 60);
            const secs = exitTimeDurationSeconds % 60;
            exitTimerClockLabel.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }, 1000);
    }

    // -------------------------------------------------------------
    // ENTERPRISE FORM INTEGRITY VALIDATION & WHATSAPP BRIDGE ROUTING
    // -------------------------------------------------------------
    globalLeadForms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const isFormStructureValid = validateTargetFormStructure(form);

            if (isFormStructureValid) {
                executeFormSubmissionLifecycle(form);
            }
        });

        // Clear dynamic tracking UI bugs upon inline client entry edits
        form.querySelectorAll("input, select").forEach(field => {
            field.addEventListener("input", function() {
                if(field.checkValidity() || (field.name === "phone" && /^[6-9]\d{9}$/.test(field.value))) {
                    field.closest(".form-group").classList.remove("invalid");
                }
            });
        });
    });

    function validateTargetFormStructure(form) {
        let structuralValidationState = true;
        const componentsArray = form.querySelectorAll("input[required], select[required]");

        componentsArray.forEach(element => {
            let fieldValid = true;
            
            if (element.name === "phone") {
                const phoneRegExpressionPattern = /^[6-9]\d{9}$/;
                fieldValid = phoneRegExpressionPattern.test(element.value);
            } else if (element.name === "name") {
                fieldValid = element.value.trim().length >= 3;
            } else {
                fieldValid = element.checkValidity();
            }

            if (!fieldValid) {
                element.closest(".form-group").classList.add("invalid");
                structuralValidationState = false;
            } else {
                element.closest(".form-group").classList.remove("invalid");
            }
        });

        return structuralValidationState;
    }

    function executeFormSubmissionLifecycle(form) {
        const primarySubmitBtn = form.querySelector(".submit-btn-loading-state");
        primarySubmitBtn.classList.add("loading");

        // Parse User Inputs Parameters
        const userFormData = new FormData(form);
        const nameVal = userFormData.get("name");
        const phoneVal = userFormData.get("phone");
        const emailVal = userFormData.get("email");
        const courseVal = userFormData.get("course") || "General Premium Course Portfolio Request";
        const branchVal = userFormData.get("branch") || "Ludhiana Shared Hubs Operation Allocation";

        // Simulate secure async network server data dump
        setTimeout(function() {
            primarySubmitBtn.classList.remove("loading");
            
            // Close active modal variants if working context dictates it
            enquiryModal.classList.remove("open");
            exitIntentModal.classList.remove("open");

            // Deploy Success Dialog Box Component Prompt
            successModal.classList.add("open");

            // Formulate high-conversion custom personalized WhatsApp string payload
            const textRawMessageString = `Hi Lakmé Academy Ludhiana! I just submitted an active application entry through your high-priority Facebook/Instagram Ads Portal:\n\n• Name: ${nameVal}\n• Contact Number: ${phoneVal}\n• Email: ${emailVal}\n• Course Track Selected: ${courseVal}\n• Center Destination: ${branchVal}\n\nPlease confirm my ₹4,999 promotional price lock voucher code right away!`;
            const secureEncodedPayload = encodeURIComponent(textRawMessageString);
            const destinationWhatsAppUrl = `https://wa.me/919876543210?text=${secureEncodedPayload}`;

            // Handle standard redirect chain operations
            document.querySelector(".close-success-btn").onclick = function() {
                successModal.classList.remove("open");
                window.open(destinationWhatsAppUrl, '_blank', 'noopener');
            };

            form.reset();
            
            // Trigger custom tracking fires here if pixel tokens exist
            console.log("Meta Lead Optimization Event Successfully Transmitted.");
        }, 1200);
    }

    // -------------------------------------------------------------
    // DYNAMIC INJECTION COURSE OVERLAY MODALS DISPATCHERS
    // -------------------------------------------------------------
    document.querySelectorAll(".btn-card-trigger").forEach(button => {
        button.addEventListener("click", function() {
            const courseTargetTitle = button.getAttribute("data-course-name");
            
            // Reconfigure form UI parameters dynamically to maximize conversion clarity
            targetModalCourseBadge.innerText = courseTargetTitle;
            targetModalCourseTxt.innerText = courseTargetTitle;
            modalHiddenCourseField.value = courseTargetTitle;

            enquiryModal.classList.add("open");
        });
    });

    // Dismiss any active overlay upon bounding box exit click interactions
    document.querySelectorAll(".global-modal-overlay, .modal-dismiss-close-btn").forEach(dismissalNode => {
        dismissalNode.addEventListener("click", function(event) {
            if (event.target === dismissalNode || dismissalNode.classList.contains("modal-dismiss-close-btn")) {
                enquiryModal.classList.remove("open");
                exitIntentModal.classList.remove("open");
                successModal.classList.remove("open");
            }
        });
    });

    // -------------------------------------------------------------
    // ADVANCED BEHAVIORAL EXIT INTENT DETECTOR TRIGGERS
    // -------------------------------------------------------------
    let hasFiredExitIntentSequence = false;

    document.addEventListener("mouseleave", function(event) {
        // Track directional mouse track vectors passing high upper boundaries
        if (event.clientY < 20 && !hasFiredExitIntentSequence) {
            hasFiredExitIntentSequence = true;
            exitIntentModal.classList.add("open");
            runExitCounterLoop();
        }
    });

    // -------------------------------------------------------------
    // INTERACTIVE FILTERABLE MEDIA GALLERY SYSTEM ENGINE
    // -------------------------------------------------------------
    const filterTabsArray = document.querySelectorAll(".filter-tab-btn");
    const masonryItemCardsList = document.querySelectorAll(".masonry-item-card");

    filterTabsArray.forEach(tab => {
        tab.addEventListener("click", function() {
            filterTabsArray.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const targetedCategoryKey = tab.getAttribute("data-filter");

            masonryItemCardsList.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                if (targetedCategoryKey === "all" || cardCategory === targetedCategoryKey) {
                    card.style.display = "block";
                    // Brief frame adjustment timeout to accommodate clean flow calculations
                    setTimeout(() => card.style.opacity = "1", 10);
                } else {
                    card.style.opacity = "0";
                    card.style.display = "none";
                }
            });
        });
    });

    // -------------------------------------------------------------
    // FULLSCREEN LIGHTBOX INTERACTIVE COMPONENT CAPABILITIES
    // -------------------------------------------------------------
    document.querySelectorAll(".gallery-trigger").forEach(imageElement => {
        imageElement.addEventListener("click", function() {
            lightboxOverlay.classList.add("open");
            lightboxTargetImg.src = imageElement.src;
            lightboxCaptionText.innerText = imageElement.alt;
        });
    });

    document.querySelector(".lightbox-close-element-btn").addEventListener("click", function() {
        lightboxOverlay.classList.remove("open");
    });
    
    lightboxOverlay.addEventListener("click", function(event) {
        if(event.target === lightboxOverlay) {
            lightboxOverlay.classList.remove("open");
        }
    });

    // -------------------------------------------------------------
    // ALUMNI TESTIMONIAL SLIDER IMPLEMENTATION DEPLOYMENT RUNNER
    // -------------------------------------------------------------
    const testimonialSlides = document.querySelectorAll(".testimonial-slide-card");
    const dotsContainerRow = document.querySelector(".slider-dots-indicator-row");
    const prevArrowBtn = document.querySelector(".prev-btn");
    const nextArrowBtn = document.querySelector(".next-btn");
    let sliderCursorIndex = 0;
    const totalSlidesCount = testimonialSlides.length;

    // Generate functional navigation tracking points
    testimonialSlides.forEach((_, indices) => {
        const dotNode = document.createElement("div");
        dotNode.classList.add("slider-dot");
        if(indices === 0) dotNode.classList.add("active");
        dotNode.setAttribute("data-slide-index", indices);
        dotsContainerRow.appendChild(dotNode);
    });

    const createdDotsList = document.querySelectorAll(".slider-dot");

    function renderActiveSlideIndexPosition(index) {
        testimonialSlides.forEach(slide => slide.classList.remove("active"));
        createdDotsList.forEach(dot => dot.classList.remove("active"));
        
        testimonialSlides[index].classList.add("active");
        createdDotsList[index].classList.add("active");
    }

    nextArrowBtn.addEventListener("click", function() {
        sliderCursorIndex = (sliderCursorIndex + 1) % totalSlidesCount;
        renderActiveSlideIndexPosition(sliderCursorIndex);
    });

    prevArrowBtn.addEventListener("click", function() {
        sliderCursorIndex = (sliderCursorIndex - 1 + totalSlidesCount) % totalSlidesCount;
        renderActiveSlideIndexPosition(sliderCursorIndex);
    });

    createdDotsList.forEach(dot => {
        dot.addEventListener("click", function() {
            sliderCursorIndex = parseInt(dot.getAttribute("data-slide-index"));
            renderActiveSlideIndexPosition(sliderCursorIndex);
        });
    });

    // Automatic slide cycling engine initialization (5s intervals)
    setInterval(() => {
        sliderCursorIndex = (sliderCursorIndex + 1) % totalSlidesCount;
        renderActiveSlideIndexPosition(sliderCursorIndex);
    }, 5000);

    // -------------------------------------------------------------
    // ACCORDION FAQS INTERACTIVE EXPANSION LOGIC GRID
    // -------------------------------------------------------------
    document.querySelectorAll(".accordion-header-trigger").forEach(trigger => {
        trigger.addEventListener("click", function() {
            const nodeParent = trigger.parentElement;
            const contentBodyBlock = nodeParent.querySelector(".accordion-body-content");
            const isCurrentlyOpen = nodeParent.classList.contains("open");

            // Collapse all structural siblings to reduce noise profiles
            document.querySelectorAll(".accordion-node").forEach(node => {
                node.classList.remove("open");
                node.querySelector(".accordion-body-content").style.maxHeight = null;
                node.querySelector(".accordion-header-trigger").setAttribute("aria-expanded", "false");
                node.querySelector(".accordion-body-content").setAttribute("aria-hidden", "true");
            });

            if (!isCurrentlyOpen) {
                nodeParent.classList.add("open");
                contentBodyBlock.style.maxHeight = contentBodyBlock.scrollHeight + "px";
                trigger.setAttribute("aria-expanded", "true");
                contentBodyBlock.setAttribute("aria-hidden", "false");
            }
        });
    });

    // -------------------------------------------------------------
    // FLOATING ADMISSIONS HELPDESK WINDOW INTERACTIVITY CHANNELS
    // -------------------------------------------------------------
    mainWhatsappFloatingTriggerBtn.addEventListener("click", function() {
        const isCurrentlyOpen = desktopFloatingWhatsappWidget.classList.contains("open");
        if(isCurrentlyOpen) {
            desktopFloatingWhatsappWidget.classList.remove("open");
            whatsappChatBubbleWindow.classList.add("hide");
        } else {
            desktopFloatingWhatsappWidget.classList.add("open");
            whatsappChatBubbleWindow.classList.remove("hide");
            // Terminate primary notification alert count ping visual layer on first view event
            const pingLabel = document.querySelector(".notification-badge-ping");
            if(pingLabel) pingLabel.style.display = "none";
        }
    });

    closeChatWindowBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        desktopFloatingWhatsappWidget.classList.remove("open");
        whatsappChatBubbleWindow.classList.add("hide");
    });

    // Trigger dynamic auto chat window popup alert following 12 seconds delay window
    setTimeout(() => {
        if(!desktopFloatingWhatsappWidget.classList.contains("open") && !hasFiredExitIntentSequence) {
            desktopFloatingWhatsappWidget.classList.add("open");
            whatsappChatBubbleWindow.classList.remove("hide");
        }
    }, 12000);

    // -------------------------------------------------------------
    // HIGH-PERFORMANCE INTERSECTION OBSERVATION ANIMATION SYSTEMS
    // -------------------------------------------------------------
    const visualRevealObserverEngine = new IntersectionObserver((entriesArray, selfReference) => {
        entriesArray.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("revealed");
                
                // If element represents live statistic block, kick off rapid numerical counters initialization
                if (entry.target.classList.contains("metrics-bar-section")) {
                    triggerNumericalCounterSequence();
                }
                
                selfReference.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -20px 0px"
    });

    document.querySelectorAll("[data-reveal], .metrics-bar-section").forEach(targetNode => {
        visualRevealObserverEngine.observe(targetNode);
    });

    function triggerNumericalCounterSequence() {
        document.querySelectorAll(".counter-number").forEach(counterElement => {
            const timeTargetCeilingValue = parseInt(counterElement.getAttribute("data-target"));
            let baseStepCursor = 0;
            const iterationCycleSpeedConstant = Math.ceil(timeTargetCeilingValue / 60);

            const internalCounterTickerRunner = setInterval(() => {
                baseStepCursor += iterationCycleSpeedConstant;
                if(baseStepCursor >= timeTargetCeilingValue) {
                    counterElement.innerText = timeTargetCeilingValue.toLocaleString('en-IN');
                    clearInterval(internalCounterTickerRunner);
                } else {
                    counterElement.innerText = baseStepCursor.toLocaleString('en-IN');
                }
            }, 25);
        });
    }

    // -------------------------------------------------------------
    // LAZY ASYNC IMAGE INTAKE LOADER CONTROLLER
    // -------------------------------------------------------------
    const imageLazyObserverEngine = new IntersectionObserver((imagesArray, engineSelfReference) => {
        imagesArray.forEach(imageRecord => {
            if(imageRecord.isIntersecting) {
                const concreteTargetImage = imageRecord.target;
                concreteTargetImage.src = concreteTargetImage.getAttribute("data-src");
                concreteTargetImage.onload = () => concreteTargetImage.removeAttribute("data-src");
                engineSelfReference.unobserve(concreteTargetImage);
            }
        });
    }, {
        rootMargin: "0px 0px 300px 0px" // Load images 300px ahead of structural arrival
    });

    document.querySelectorAll("img[data-src]").forEach(lazyImage => {
        imageLazyObserverEngine.observe(lazyImage);
    });
});
