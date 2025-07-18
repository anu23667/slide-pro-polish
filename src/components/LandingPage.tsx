import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Upload, 
  Zap, 
  TrendingUp, 
  FileText, 
  BarChart3, 
  Eye, 
  CheckCircle, 
  Users, 
  GraduationCap, 
  Building2, 
  Rocket, 
  Target 
} from 'lucide-react';
import badDeckImage from '@/assets/bad-deck-example.jpg';
import goodDeckImage from '@/assets/good-deck-example.jpg';

const LandingPage = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Drop your deck or paste a link",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Evaluate", 
      description: "Our system scans structure, storyline, and flow",
      color: "text-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Improve",
      description: "Get AI feedback + smart suggestions instantly",
      color: "text-green-400"
    }
  ];

  const evaluationItems = [
    { icon: FileText, title: "Structure and flow", description: "Logical progression and organization" },
    { icon: BarChart3, title: "Slide hierarchy", description: "Clear information architecture" },
    { icon: Target, title: "Storyline and logic", description: "Compelling narrative structure" },
    { icon: CheckCircle, title: "Slide consistency", description: "Uniform design and formatting" },
    { icon: Eye, title: "Visual clarity", description: "Clean and readable layouts" },
    { icon: Building2, title: "Title alignment", description: "Proper heading structure" }
  ];

  const audienceItems = [
    { icon: Target, title: "Case competition participants", description: "Win with structured thinking" },
    { icon: Building2, title: "Consulting aspirants", description: "Master the McKinsey way" },
    { icon: GraduationCap, title: "B-School students", description: "Academic excellence made easy" },
    { icon: Users, title: "Corporate trainees", description: "Professional presentations" },
    { icon: Rocket, title: "Startup pitch teams", description: "Investor-ready decks" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-float"></div>
        
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Polish Your Deck Like a Pro
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Instant feedback on structure, logic, and story — so your case decks always stand out.
            </p>
          </div>

          <div className="upload-zone max-w-2xl mx-auto mb-8 animate-glow">
            <Upload className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h3 className="text-2xl font-semibold mb-2">Drop your deck here</h3>
            <p className="text-muted-foreground mb-6">Drag and drop your presentation or click to browse</p>
            <Button className="btn-glow">
              Upload Your Deck
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Get instant AI-powered feedback on structure, flow, and logic.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={addToRefs} className="scroll-reveal py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="feature-card text-center group">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                      <step.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Evaluate Section */}
      <section ref={addToRefs} className="scroll-reveal py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What We <span className="bg-gradient-primary bg-clip-text text-transparent">Evaluate</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationItems.map((item, index) => (
              <Card key={index} className="evaluation-card group cursor-pointer">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section ref={addToRefs} className="scroll-reveal py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Before vs <span className="bg-gradient-primary bg-clip-text text-transparent">After</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-400 text-center">Before</h3>
              <Card className="overflow-hidden border-red-500/50">
                <img 
                  src={badDeckImage} 
                  alt="Poor presentation structure" 
                  className="w-full h-80 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-red-400 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Issues found</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Inconsistent formatting</li>
                    <li>• Poor visual hierarchy</li>
                    <li>• Unclear storyline</li>
                    <li>• Cluttered layouts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-400 text-center">After</h3>
              <Card className="overflow-hidden border-green-500/50 shadow-glow">
                <img 
                  src={goodDeckImage} 
                  alt="Improved presentation structure" 
                  className="w-full h-80 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-green-400 mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Optimized</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Clean, consistent design</li>
                    <li>• Clear visual hierarchy</li>
                    <li>• Compelling narrative</li>
                    <li>• Professional layout</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section ref={addToRefs} className="scroll-reveal py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Who It's <span className="bg-gradient-primary bg-clip-text text-transparent">For</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceItems.slice(0, 3).map((item, index) => (
              <Card key={index} className="feature-card group">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {audienceItems.slice(3).map((item, index) => (
              <Card key={index + 3} className="feature-card group">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-glow rounded-3xl p-12 shadow-glow">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Improve Your <span className="bg-gradient-primary bg-clip-text text-transparent">Deck?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Free to use. Instant feedback. No signup needed.
            </p>
            <Button className="btn-glow text-xl px-12 py-6">
              Upload Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;