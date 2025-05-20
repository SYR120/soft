import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*") //모든 주소 접근 허용
@RestController
@RequestMapping("/api/test")

public class UserController {
    private final UserRepository repo;
    public UserController(UserRepository repo) { this.repo = repo; }

    @GetMapping
    public List<User> getAll() {
        return repo.findAll();
    }
}