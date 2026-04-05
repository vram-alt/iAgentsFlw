import { AiGoCapabilities } from './AiGoCapabilities';
import { AiGoControlPlane } from './AiGoControlPlane';
import { AiGoCta } from './AiGoCta';
import { AiGoGovernanceGap } from './AiGoGovernanceGap';
import { AiGoHero } from './AiGoHero';
import { AiGoPageNav } from './AiGoPageNav';
import { AiGoPersonaSections } from './AiGoPersonaSections';

export default function AiGoPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen overflow-x-hidden bg-background text-foreground"
    >
      <AiGoHero />
      {/* <AiGoPageNav /> */}
      <AiGoGovernanceGap />
      <AiGoControlPlane />
      <AiGoCapabilities />
      <AiGoPersonaSections />
      <AiGoCta />
    </main>
  );
}
