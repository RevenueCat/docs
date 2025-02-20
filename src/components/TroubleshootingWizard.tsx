import React, { useState } from 'react';

interface Platform {
  id: string;
  name: string;
  icon?: string;
}

interface Step {
  title: string;
  description: string;
  caption?: string;
  image?: {
    src: string;
    alt: string;
  };
  platforms?: string[]; // Step will show for these platforms only
}

interface TroubleshootingWizardProps {
  title: string;
  subtitle?: string;
  platforms: Platform[];
  steps: Step[];
}

interface FinalStepProps {
  onSuccess: () => void;
  onFailure: () => void;
}

const createMarkup = (htmlContent: string) => {
  return { __html: htmlContent };
};

const ListViewStep: React.FC<{ step: Step; isCompleted: boolean; onToggle: () => void }> = ({
  step,
  isCompleted,
  onToggle,
}) => (
  <div className="list-view-step">
    <label className="step-checkbox">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
      />
      <div className="step-content">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
        {step.caption && (
          <p 
            className="caption"
            dangerouslySetInnerHTML={createMarkup(step.caption)}
          />
        )}
        {step.image && (
          <img
            src={step.image.src}
            alt={step.image.alt}
            className="step-image"
          />
        )}
      </div>
    </label>
  </div>
);

const FinalStep: React.FC<FinalStepProps> = ({ onSuccess, onFailure }) => (
  <div className="final-step">
    <h3>Try Fetching Products Again</h3>
    <p>Now that you've completed all the steps, try fetching products in your app again by restarting and relaunching your app.</p>
    
    <div className="final-step-buttons">
      <button 
        className="success-button"
        onClick={onSuccess}
      >
        ✨ It worked!
      </button>
      <button 
        className="failure-button"
        onClick={onFailure}
      >
        Still not working
      </button>
    </div>
  </div>
);

const SuccessMessage: React.FC<{ onStartOver: () => void }> = ({ onStartOver }) => (
  <div className="success-message">
    <h3>🎉 Congratulations!</h3>
    <p>Your products are now being fetched successfully.</p>
    <button 
      className="start-over-button"
      onClick={onStartOver}
    >
      Start Over
    </button>
  </div>
);

const FailureMessage: React.FC<{ onStartOver: () => void }> = ({ onStartOver }) => (
  <div className="failure-message">
    <h3>Need More Help?</h3>
    <p>
      If you've gone through all of the steps above, and you're still stuck, you can look through 
      the 'Empty Products' tag in the community to see how other developers have resolved the problem:
    </p>
    <a 
      href="https://community.revenuecat.com/search?q=Empty+Products&search_type=tag"
      target="_blank"
      rel="noopener noreferrer"
      className="community-link"
    >
      View Community Discussions
    </a>
    <div>
      <button 
        className="start-over-button"
        onClick={onStartOver}
      >
        Start Over
      </button>
    </div>
  </div>
);

export const TroubleshootingWizard: React.FC<TroubleshootingWizardProps> = ({
  title,
  subtitle,
  platforms,
  steps,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(new Array(steps.length).fill(false));
  const [viewMode, setViewMode] = useState<'wizard' | 'list'>('wizard');
  const [outcome, setOutcome] = useState<'pending' | 'success' | 'failure'>('pending');
  const [showingFinalStep, setShowingFinalStep] = useState(false);

  const selectedPlatformName = platforms.find(p => p.id === selectedPlatform)?.name;

  // Filter steps based on selected platform
  const platformSteps = steps.filter(
    step => !step.platforms || step.platforms.includes(selectedPlatform!)
  );

  const goToNextStep = () => {
    if (currentStep < platformSteps.length - 1 && completedSteps[currentStep]) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === platformSteps.length - 1 && completedSteps[currentStep]) {
      setShowingFinalStep(true);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleStepCompletion = (index: number) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[index] = !newCompletedSteps[index];
    setCompletedSteps(newCompletedSteps);
  };

  const selectPlatform = (platformId: string) => {
    setSelectedPlatform(platformId);
    setCurrentStep(0);
    setCompletedSteps(new Array(steps.length).fill(false));
  };

  // Check if all steps are completed
  const allStepsCompleted = completedSteps.slice(0, platformSteps.length).every(step => step);

  const startOver = () => {
    setSelectedPlatform(null);
    setCurrentStep(0);
    setCompletedSteps(new Array(steps.length).fill(false));
    setOutcome('pending');
    setShowingFinalStep(false);
    setViewMode('wizard');
  };

  if (!selectedPlatform) {
    return (
      <div className="troubleshooting-wizard">
        <div className="wizard-header">
          <h2>{title}</h2>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>

        <div className="platform-selector">
          <h3>Select your platform</h3>
          <div className="platform-buttons">
            {platforms.map(platform => (
              <button
                key={platform.id}
                className="platform-button"
                onClick={() => selectPlatform(platform.id)}
              >
                {platform.icon && <span className="platform-icon">{platform.icon}</span>}
                {platform.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showingFinalStep) {
    if (outcome === 'pending') {
      return (
        <div className="troubleshooting-wizard">
          <div className="wizard-header">
            <h2>{title}</h2>
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>
          <FinalStep
            onSuccess={() => setOutcome('success')}
            onFailure={() => setOutcome('failure')}
          />
        </div>
      );
    }

    return (
      <div className="troubleshooting-wizard">
        <div className="wizard-header">
          <h2>{title}</h2>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
        {outcome === 'success' ? (
          <SuccessMessage onStartOver={startOver} />
        ) : (
          <FailureMessage onStartOver={startOver} />
        )}
      </div>
    );
  }

  return (
    <div className="troubleshooting-wizard">
      <div className="wizard-header">
        <h2>{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <div className="wizard-controls">
          <button 
            className="platform-selector-button"
            onClick={() => setSelectedPlatform(null)}
          >
            {selectedPlatformName}
          </button>
          <div className="view-mode-toggle">
            <button
              className={`view-mode-button ${viewMode === 'wizard' ? 'active' : ''}`}
              onClick={() => setViewMode('wizard')}
            >
              Step by Step
            </button>
            <button
              className={`view-mode-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              View All Steps
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'wizard' ? (
        <div className="wizard-content">
          <div className="step-counter">
            Step {currentStep + 1} of {platformSteps.length}
          </div>

          <div className="step-content">
            <h3>{platformSteps[currentStep].title}</h3>
            <p>{platformSteps[currentStep].description}</p>
            {platformSteps[currentStep].caption && (
              <p 
                className="caption"
                dangerouslySetInnerHTML={createMarkup(platformSteps[currentStep].caption)}
              />
            )}
            {platformSteps[currentStep].image && (
              <img
                src={platformSteps[currentStep].image.src}
                alt={platformSteps[currentStep].image.alt}
                className="step-image"
              />
            )}
            
            <label className="step-checkbox">
              <input
                type="checkbox"
                checked={completedSteps[currentStep]}
                onChange={() => toggleStepCompletion(currentStep)}
              />
              <span>I have completed this step</span>
            </label>
          </div>

          <div className="wizard-navigation">
            <button
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
              className="nav-button"
            >
              Previous
            </button>
            <button
              onClick={goToNextStep}
              disabled={!completedSteps[currentStep]}
              className="nav-button"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="list-view">
          {platformSteps.map((step, index) => (
            <ListViewStep
              key={index}
              step={step}
              isCompleted={completedSteps[index]}
              onToggle={() => toggleStepCompletion(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}; 