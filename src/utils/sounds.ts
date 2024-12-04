class SoundManager {
  private static instance: SoundManager;
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private isMuted: boolean = false;

  private constructor() {
    this.sounds = {
      flip: new Audio("/sounds/flip.wav"),
      match: new Audio("/sounds/match.wav"),
      win: new Audio("/sounds/win.wav"),
      wrong: new Audio("/sounds/wrong.wav"),
    };
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public play(soundName: "flip" | "match" | "win" | "wrong"): void {
    if (!this.isMuted && this.sounds[soundName]) {
      this.sounds[soundName].currentTime = 0;
      this.sounds[soundName]
        .play()
        .catch((error) => console.error("Error playing sound:", error));
    }
  }

  public toggleMute(): void {
    this.isMuted = !this.isMuted;
  }

  public isSoundMuted(): boolean {
    return this.isMuted;
  }
}

export const soundManager = SoundManager.getInstance();
